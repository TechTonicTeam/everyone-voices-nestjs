import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./user.entity";

@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Users)
    @JoinColumn({name: 'user'})
    Users: Users

    @Column({
        unique: true
    })
    token: string
}