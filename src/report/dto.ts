import {ApiProperty} from "@nestjs/swagger";

export class CreateReportDto {
    @ApiProperty()
    userId: number

    @ApiProperty()
    title: string

    @ApiProperty()
    body: string

    @ApiProperty()
    timestamp: string
}

export class DeleteReportDto {
    @ApiProperty()
    id: number
}