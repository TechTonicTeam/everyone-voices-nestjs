import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./post.entity";

@Entity()
export class PostPictures {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    picture: string

    @ManyToOne(() => Post, (post) => post.pictures, {onDelete: 'CASCADE'})
    post: Post
}