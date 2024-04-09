import {Module} from "@nestjs/common";
import {PostController} from "./post.controller";
import {PostService} from "./post.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../entities/user.entity";
import {Comment} from "../entities/comment.entity";
import {LikedPost} from "../entities/likedPost.entity";
import {Post} from "../entities/post.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Comment, LikedPost, Post]),
    ],
    controllers: [PostController],
    providers: [PostService]
})

export class PostModule {}