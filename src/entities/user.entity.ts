import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Token} from "./token.entity";
import {Post} from "./post.entity";
import {Comment} from "./comment.entity";
import {Report} from "./report.entity";

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

    @OneToMany(() => Post, (post) => post.user, {onDelete: 'CASCADE'})
    post: Post[]

    @OneToMany(() => Comment, (comment) => comment.user, {onDelete: 'CASCADE'})
    comments: Comment[]

    @OneToMany(() => Report, (report) => report.user, {onDelete: 'CASCADE'})
    reports: Report[]
}