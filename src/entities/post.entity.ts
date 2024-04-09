import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Comment} from "./comment.entity";
import {LikedPost} from "./likedPost.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    timestamp: Date

    @Column()
    picture: string

    @Column()
    likes: number

    @OneToMany(() => Comment, (comment) => comment.post)
    comment: Comment[]

    @OneToMany(() => LikedPost, (likedPost) => likedPost.post, {onDelete: 'CASCADE'})
    likedPost: LikedPost[]
}