import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Token} from "./token.entity";

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
}