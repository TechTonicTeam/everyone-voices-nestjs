import {BadRequestException, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Users} from "../entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Post} from "../entities/post.entity";
import {Comment} from "../entities/comment.entity";

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {
    }
    async createNewComment(user_id: number, post_id: number, comment_title: string, comment_timestamp: Date) {
        const currentUser = await this.userRepository.findOne({where: {id: user_id}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        const currentPost = await this.postRepository.findOne({where: {id: post_id}})
        if (!currentPost) {
            throw new BadRequestException()
        }

        const newComment = this.commentRepository.create({
            title: comment_title,
            timestamp: comment_timestamp,
            user: currentUser,
            post: currentPost,
            likes: 0
        })

        await this.commentRepository.save(newComment)
        return await this.postRepository.findOne({
            where: {id: post_id},
            relations: ['likedUser', 'comment', 'user', 'comment.likedUser', 'comment.user'],
        })
    }

    async deleteComment(comment_id: number) {
        await this.commentRepository.delete({id: comment_id})
        return 'Комментарий успешно удален'
    }

    async checkCurrentCommentAndUser(comment_id: number, user_id: number) {
        const currentUser = await this.userRepository.findOne({where: {id: user_id}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        const currentComment = await this.commentRepository.findOne({
            where: {id: comment_id},
            relations: ['likedUser']
        })
        if (!currentComment) {
            throw new BadRequestException()
        }

        return {
            currentUser,
            currentComment
        }
    }

    async likeComment(comment_id: number, user_id: number) {
        const commentAndUser = await this.checkCurrentCommentAndUser(comment_id, user_id)
        commentAndUser.currentComment.likes++
        commentAndUser.currentComment.likedUser.push(commentAndUser.currentUser)
        await this.commentRepository.save(commentAndUser.currentComment)
        return commentAndUser.currentComment
    }

    async dislikeComment(comment_id: number, user_id: number) {
        const commentAndUser = await this.checkCurrentCommentAndUser(comment_id, user_id)
        commentAndUser.currentComment.likes--
        commentAndUser.currentComment.likedUser = commentAndUser.currentComment.likedUser.filter(item => item.id !== user_id)
        await this.commentRepository.save(commentAndUser.currentComment)
        return commentAndUser.currentComment
    }
}