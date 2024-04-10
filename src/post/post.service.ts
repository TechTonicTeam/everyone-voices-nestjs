import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Post} from "../entities/post.entity";
import {Repository} from "typeorm";
import {CreateNewPostDto, DeletePostDto} from "./dto";
import {Users} from "../entities/user.entity";
import {LikedPost} from "../entities/likedPost.entity";

@Injectable()

export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        @InjectRepository(LikedPost)
        private likedPostRepository: Repository<LikedPost>
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
            relations: ['likedPost', 'likedPost.user', 'comment', 'user', 'comment.likedComment'],
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
        const currentUser = await this.userRepository.findOne({where: {id: user_id}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        const currentPost = await this.postRepository.findOne({where: {id: post_id}})
        if (!currentPost) {
            throw new BadRequestException()
        }

        const likedPost = await this.likedPostRepository.findOne({where: {post: currentPost, user: currentUser}})
        if (likedPost) {
            throw new BadRequestException()
        }

        currentPost.likes++
        await this.postRepository.save(currentPost)
        const newLike = this.likedPostRepository.create({user: currentUser, post: currentPost})
        await this.likedPostRepository.save(newLike)
        return await this.postRepository.find({
            where: {id: post_id},
            relations: ['likedPost', 'likedPost.user', 'comment', 'user', 'comment.likedComment'],
        })
    }
}