import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {Comment} from "./comment.entity";
import {Users} from "./user.entity";
import {PostPictures} from "./postPictures.entity";

    @Entity()
    export class Post {
        @PrimaryGeneratedColumn()
        id: number

        @Column()
        title: string

        @Column()
        timestamp: string

        @Column()
        likes: number

        @OneToMany(() => Comment, (comment) => comment.post)
        comment: Comment[]

        @ManyToMany(() => Users)
        @JoinTable({name: 'liked_post'})
        likedUser: Users[]

        @ManyToOne(() => Users, (users) => users.post, {onDelete: 'CASCADE'})
        user: Users

        @OneToMany(() => PostPictures, (postPictures) => postPictures.post)
        pictures: PostPictures[]
    }