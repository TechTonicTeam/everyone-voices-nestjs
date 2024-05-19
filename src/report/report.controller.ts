import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get, Param,
    Post,
    Query,
    UploadedFiles,
    UseInterceptors
} from "@nestjs/common";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {CreateReportDto, DeleteReportDto} from "./dto";
import {ReportService} from "./report.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Reports')
@Controller('report')
export class ReportController {
    constructor(
        private reportService: ReportService
    ) {
    }
    @Get()
    async getAllReports() {
        try {
            return await this.reportService.getAllReports()
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @UseInterceptors(
        FilesInterceptor('files', 10, {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => (Math.round(Math.random() * 16)).toString(16))
                        .join('');
                    cb(null, `${randomName}-${file.originalname}`);
                },
            }),
        }),
    )
    @Post()
    async createReport(@UploadedFiles() files: Express.Multer.File[], @Body() report: CreateReportDto) {
        try {
            const fileNames = files.map(file => file.filename);
            return await this.reportService.createReport(report, fileNames)
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Delete()
    async deleteReport(@Body() id: DeleteReportDto) {
        try {
            return await this.reportService.deleteReport(id)
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }
}