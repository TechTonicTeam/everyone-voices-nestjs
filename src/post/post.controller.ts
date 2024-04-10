import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query, Res, UploadedFile, UploadedFiles,
    UseInterceptors
} from "@nestjs/common";
import {CreateNewPostDto, DeletePostDto, LikePostDto} from "./dto";
import {PostService} from "./post.service";
import {ApiBody, ApiConsumes, ApiOperation, ApiProperty} from "@nestjs/swagger";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import e from "express";
import {extname} from "path";
import {ConfigService} from "@nestjs/config";
import * as path from "path";
@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
        private readonly configService: ConfigService
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

    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: 'uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                cb(null, `${randomName}${(file.originalname)}`);
            }
        })
    }))
    @Post('create')
    async createNewPost(@UploadedFile() file, @Body() postInfo: CreateNewPostDto) {
        try {
            let files: string
            if (file?.filename) {
                files = file.filename
            } else {
                files = ''
            }
            return await this.postService.createNewPost(postInfo, files)
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

    @Put('dislike')
    async dislikePost(@Body() info: LikePostDto) {
        try {
            return await this.postService.dislikePost(info.user_id, info.post_id)
        } catch(e) {
            return new BadRequestException(e.message)
        }
    }
}