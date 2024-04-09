import {ApiProperty} from "@nestjs/swagger";

export class CreateNewPostDto {
    @ApiProperty()
    user_id: number

    @ApiProperty()
    title: string

    @ApiProperty({
        nullable: true
    })
    picture: string

    @ApiProperty()
    timestamp: Date
}

export class DeletePostDto {
    @ApiProperty()
    post_id: number
}