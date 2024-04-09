import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./post.entity";
import {LikedComment} from "./likedComment.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    timestamp: string

    @Column()
    likes: number

    @ManyToOne(() => Post, (post) => post.comment, {onDelete: 'CASCADE'})
    post: Post

    @OneToMany(() => LikedComment, (likedComment) => likedComment.comment, {onDelete: "CASCADE"})
    likedComment: LikedComment[]
}