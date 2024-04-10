import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Token} from "./token.entity";
import {LikedComment} from "./likedComment.entity";
import {LikedPost} from "./likedPost.entity";
import {Post} from "./post.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        nullable: true
    })
    picture: string

    @Column({
        nullable: true
    })
    password: string

    @Column()
    role: string

    @OneToOne(() => Token)
    Token: Token

    @OneToMany(() => LikedComment, (likedComment) => likedComment.user, {onDelete: 'CASCADE'})
    likedComment: LikedComment[]

    @OneToMany(() => LikedPost, (likedPost) => likedPost.user, {onDelete: 'CASCADE'})
    likedPost: LikedPost[]

    @OneToMany(() => Post, (post) => post.user, {onDelete: 'CASCADE'})
    post: Post[]
}