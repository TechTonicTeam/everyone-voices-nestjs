import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./user.entity";
import {ReportPictures} from "./reportPictures.entity";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    body: string

    @Column()
    timestamp: string

    @OneToMany(() => ReportPictures, (reportPictures) => reportPictures.report)
    reportPictures: ReportPictures[]

    @ManyToOne(() => Users, (users) => users.reports, {onDelete: 'CASCADE'})
    user: Users
}

// картинки title время текст