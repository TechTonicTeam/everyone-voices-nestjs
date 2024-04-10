import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty()
    title: string

    @ApiProperty()
    timestamp: Date

    @ApiProperty()
    user_id: number

    @ApiProperty()
    post_id: number
}

export class DeleteCommentDto {
    @ApiProperty()
    comment_id: number
}

export class LikeCommentDto {
    @ApiProperty()
    comment_id: number

    @ApiProperty()
    user_id: number
}