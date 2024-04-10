import {Module} from "@nestjs/common";
import {CommentController} from "./comment.controller";
import {CommentService} from "./comment.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../entities/user.entity";
import {Post} from "../entities/post.entity";
import {PostService} from "../post/post.service";
import {Comment} from "../entities/comment.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Post, Comment])
    ],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {}