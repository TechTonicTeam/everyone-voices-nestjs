import {BadRequestException, Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {CreateNewPostDto, DeletePostDto} from "./dto";
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
}