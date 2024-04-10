import {BadRequestException, Body, Controller, Delete, Post, Put} from "@nestjs/common";
import {CommentService} from "./comment.service";
import {CreateCommentDto, DeleteCommentDto, LikeCommentDto} from "./dto";

@Controller('comment')
export class CommentController {
    constructor(
        private readonly commentService: CommentService
    ) {
    }
    @Post()
    async createComment(@Body() commentInfo: CreateCommentDto) {
        try {
            return await this.commentService.createNewComment(
                commentInfo.user_id,
                commentInfo.post_id,
                commentInfo.title,
                commentInfo.timestamp
            )
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Delete()
    async deleteComment(@Body() comment: DeleteCommentDto) {
        try {
            return await this.commentService.deleteComment(comment.comment_id)
        } catch(e) {
            return new BadRequestException(e.message)
        }
    }

    @Put('like')
    async likeComment(@Body() commentInfo: LikeCommentDto) {
        try {
            return await this.commentService.likeComment(commentInfo.comment_id, commentInfo.user_id)
        } catch(e) {
            return new BadRequestException(e.message)
        }
    }

    @Put('dislike')
    async dislikeComment(@Body() commentInfo: LikeCommentDto) {
        try {
            return await this.commentService.dislikeComment(commentInfo.comment_id, commentInfo.user_id)
        } catch(e) {
            return new BadRequestException(e.message)
        }
    }
}