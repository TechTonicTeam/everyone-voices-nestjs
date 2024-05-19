import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Report} from "../entities/report.entity"
import {Users} from "../entities/user.entity";
import {CreateReportDto, DeleteReportDto} from "./dto";
import {ReportPictures} from "../entities/reportPictures.entity";

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Report)
        private reportRepository: Repository<Report>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        @InjectRepository(ReportPictures)
        private reportPictures: Repository<ReportPictures>,
    ) {
    }
    async getAllReports() {
        return await this.reportRepository.find({
            relations: ['reportPictures']
        })
    }

    async createReport(report: CreateReportDto, fileNames: string[]) {
        const newReport = this.reportRepository.create(report)
        await this.reportRepository.save(newReport)

        const files = fileNames.map(fileName => {
            const reportPictures = new ReportPictures();
            reportPictures.picture = fileName;
            reportPictures.report = newReport;
            return reportPictures;
        });

        await this.reportPictures.save(files);

        return newReport;
    }

    async deleteReport(id: DeleteReportDto) {
        return await this.reportRepository.delete(id)
    }
}