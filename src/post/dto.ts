import {ApiBody, ApiProperty} from "@nestjs/swagger";

export class CreateNewPostDto {
    @ApiProperty()
    user_id: number

    @ApiProperty()
    title: string

    @ApiProperty()
    timestamp: string
}

export class DeletePostDto {
    @ApiProperty()
    post_id: number
}

export class LikePostDto {
    @ApiProperty()
    user_id: number

    @ApiProperty()
    post_id: number
}

