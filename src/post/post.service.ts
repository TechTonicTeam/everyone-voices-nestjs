import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Post} from "../entities/post.entity";
import {Repository} from "typeorm";
import {CreateNewPostDto, DeletePostDto} from "./dto";
import {Users} from "../entities/user.entity";
@Injectable()

export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) {
    }
    async createNewPost(postInfo: CreateNewPostDto) {
        const currentUser = await this.userRepository.findOne({where: {id: postInfo.user_id}})
        delete currentUser.password
        const createPost = this.postRepository.create({...postInfo, likes: 0, user: currentUser})
        return  await this.postRepository.save(createPost)
    }

    async deletePost(postInfo: DeletePostDto) {
        return await this.postRepository.delete(postInfo.post_id)
    }

    async getAllPost(user_id: number, sorting?: string) {
        switch (sorting) {
            case 'Сначала популярные':
                return await this.getPostAscDesc('likes asc')
            case 'Сначала старые':
                return await this.getPostAscDesc('DESC')
            case 'Сначала мои предложения':
                return await this.getMyPost(user_id)
            default:
                return await this.getPostAscDesc('ASC')
        }
    }

    async getPostAscDesc(sorting: string) {
        const orderObject: { [key: string]: 'ASC' | 'DESC' } = {};
        if (sorting === 'asc' || sorting === 'desc') {
            orderObject.timestamp = sorting.toUpperCase() as 'ASC' | 'DESC';
        }
        else if (sorting === 'likes asc') {
            orderObject.likes = 'ASC'
        }
        else {
            orderObject.timestamp = 'ASC';
        }

        return await this.postRepository.find({
            relations: ['likedUser', 'comment', 'user', 'comment.likedUser', 'comment.user'],
            order: orderObject
        })
    }

    async getMyPost(user_id: number) {
        const myPost = await this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .where('user.id = :user_id', { user_id })
            .getMany();

        const otherPost = await this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.user', 'user')
            .where('user.id != :user_id', { user_id })
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
        return await this.postRepository.findOne({
            where: {id: post_id},
            relations: ['likedUser', 'comment', 'user', 'comment.likedUser', 'comment.user'],
        })
    }
}