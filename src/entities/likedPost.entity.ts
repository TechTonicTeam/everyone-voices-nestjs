import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./user.entity";
import {Post} from "./post.entity";

@Entity()
export class LikedPost {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, (user) => user.likedPost, {onDelete: 'CASCADE'})
    user: Users

    @ManyToOne(() => Post, (post) => post.likedPost, {onDelete: 'CASCADE'})
    post: Post
}