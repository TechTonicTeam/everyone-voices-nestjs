import {BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";
import {CreateNewPostDto, DeletePostDto, LikePostDto} from "./dto";
import {PostService} from "./post.service";
import {ApiProperty} from "@nestjs/swagger";

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService
    ) {
    }
    @Get('allPost')
    async getAllPost(@Query('user_id') user_id: number, @Query('sorting') sorting: string) {
        try {
            return await this.postService.getAllPost(user_id, sorting)
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Post('create')
    createNewPost(@Body() postInfo: CreateNewPostDto) {
        try {
            return this.postService.createNewPost(postInfo)
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Delete('delete')
    async deletePost(@Body() postInfo: DeletePostDto) {
        try {
            return await this.postService.deletePost(postInfo)
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Put('like')
    async likePost(@Body() info: LikePostDto) {
        try {
            return await this.postService.likePost(info.user_id, info.post_id)
        } catch(e) {
            return new BadRequestException(e.message)
        }
    }

}