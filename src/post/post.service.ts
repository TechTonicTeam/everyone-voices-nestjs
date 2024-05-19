import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Post} from "../entities/post.entity";
import {Repository} from "typeorm";
import {CreateNewPostDto, DeletePostDto} from "./dto";
import {Users} from "../entities/user.entity";
import {PostPictures} from "../entities/postPictures.entity";
import {ReportPictures} from "../entities/reportPictures.entity";
@Injectable()

export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        @InjectRepository(PostPictures)
        private postPicturesRepository: Repository<PostPictures>
    ) {
    }
    async createNewPost(postInfo: CreateNewPostDto, fileNames: string[]) {
        const currentUser = await this.userRepository.findOne({where: {id: postInfo.user_id}})
        if (!currentUser) {
            throw new BadRequestException()
        }
        delete currentUser.password
        const createPost = this.postRepository.create({...postInfo, likes: 0, user: currentUser})
        await this.postRepository.save(createPost)

        const files = fileNames.map(fileName => {
            const postPictures = new PostPictures();
            postPictures.picture = fileName;
            postPictures.post = createPost;
            return postPictures;
        });

        await this.postPicturesRepository.save(files)

        return await this.postRepository.findOne({
            where: {...createPost},
            relations: ['likedUser', 'pictures', 'comment', 'user', 'comment.likedUser', 'comment.user']
        })
    }

    async deletePost(postInfo: DeletePostDto) {
        return await this.postRepository.delete(postInfo.post_id)
    }

    async getAllPost(user_id: number, sorting?: string) {
        switch (sorting) {
            case 'Сначала популярные':
                return await this.getPostAscDesc('likes asc')
            case 'Сначала старые':
                return await this.getPostAscDesc('ASC')
            case 'Сначала мои предложения':
                return await this.getMyPost(user_id)
            default:
                return await this.getPostAscDesc('DESC')
        }
    }

    async getPostAscDesc(sorting: string) {
        const orderObject: { [key: string]: string } = {}
        if (sorting === 'likes asc') {
            orderObject.likes = 'DESC'
        }
        else {
            orderObject.id = sorting;
        }

        return await this.postRepository.find({
            relations: ['likedUser', 'pictures', 'comment', 'user', 'comment.likedUser', 'comment.user'],
            order: orderObject
        })
    }

    async getMyPost(user_id: number) {
        const myPost = await this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .where('user.id = :user_id', { user_id })
            .leftJoinAndSelect('post.comment', 'comment')
            .leftJoinAndSelect('post.pictures', 'pictures')
            .leftJoinAndSelect('comment.user', 'users')
            .leftJoinAndSelect('comment.likedUser', 'likedUser')
            .leftJoinAndSelect('post.likedUser', 'liked')
            .orderBy('post.id', 'DESC')
            .getMany();

        const otherPost = await this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .where('user.id != :user_id', { user_id })
            .leftJoinAndSelect('post.comment', 'comment')
            .leftJoinAndSelect('post.pictures', 'pictures')
            .leftJoinAndSelect('comment.user', 'users')
            .leftJoinAndSelect('comment.likedUser', 'likedUser')
            .leftJoinAndSelect('post.likedUser', 'liked')
            .orderBy('post.id', 'DESC')
            .getMany();
        return [...myPost, ...otherPost]
    }

    async likePost(user_id: number, post_id: number) {
        const info = await this.checkPost(user_id, post_id)
        info.currentPost.likes++
        info.currentPost.likedUser.push(info.currentUser)
        await this.postRepository.save(info.currentPost)
        return await this.getOnePost(post_id)
    }

    async dislikePost(user_id: number, post_id: number) {
        const likeInfo = await this.checkPost(user_id, post_id)
        likeInfo.currentPost.likes--
        likeInfo.currentPost.likedUser = likeInfo.currentPost.likedUser.filter(item => item.id !== user_id)
        await this.postRepository.save(likeInfo.currentPost)
        return await this.getOnePost(post_id)
    }

    async checkPost(user_id: number, post_id: number) {
        const currentUser = await this.userRepository.findOne({where: {id: user_id}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        const currentPost = await this.postRepository.findOne({
            where: {id: post_id},
            relations: ['likedUser']
        })

        if (!currentPost) {
            throw new BadRequestException()
        }
        delete currentUser.password
        return {currentUser, currentPost}
    }

    async getOnePost(post_id: number) {
        if (!post_id) {
            throw new BadRequestException()
        }
        return await this.postRepository.findOne({
            where: {id: post_id},
            relations: ['likedUser', 'comment', 'user', 'comment.likedUser', 'comment.user'],
        })
    }
}