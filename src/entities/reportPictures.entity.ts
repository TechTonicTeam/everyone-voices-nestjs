import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Report} from "./report.entity";

@Entity()
export class ReportPictures {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    picture: string

    @ManyToOne(() => Report, (report) => report.reportPictures, {onDelete: 'CASCADE'})
    report: Report
}