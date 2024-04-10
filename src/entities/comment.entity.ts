import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./post.entity";
import {Users} from "./user.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    timestamp: Date

    @Column()
    likes: number

    @ManyToOne(() => Post, (post) => post.comment, {onDelete: 'CASCADE'})
    post: Post

    @ManyToMany(() => Users, (users) => users.comments, {onDelete: 'CASCADE'})
    @JoinTable({name: 'likes_comments'})
    likedUser: Users[]

    @ManyToOne(() => Users, (users) => users.comments, {onDelete: 'CASCADE'})
    user: Users
}