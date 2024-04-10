import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Comment} from "./comment.entity";
import {LikedPost} from "./likedPost.entity";
import {Users} from "./user.entity";

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

        @OneToMany(() => LikedPost, (likedPost) => likedPost.post)
        likedPost: LikedPost[]

        @ManyToOne(() => Users, (users) => users.post, {onDelete: 'CASCADE'})
        user: Users
    }