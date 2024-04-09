import {Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./user.entity";
import {Comment} from "./comment.entity"

@Entity()
export class LikedComment {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Users, (users) => users.likedComment, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: Users

    @ManyToOne(() => Comment, (comment) => comment.likedComment, {onDelete: 'CASCADE'})
    comment: Comment
}