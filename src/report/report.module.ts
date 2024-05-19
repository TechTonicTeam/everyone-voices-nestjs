import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReportService} from "./report.service";
import {ReportController} from "./report.controller";
import {Report} from "../entities/report.entity"
import {Users} from "../entities/user.entity";
import {ReportPictures} from "../entities/reportPictures.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Report, Users, ReportPictures]),
    ],
    controllers: [ReportController],
    providers: [ReportService]
})
export class ReportModule {}