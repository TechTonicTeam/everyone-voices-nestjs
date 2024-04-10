import {ApiProperty} from "@nestjs/swagger";

export class CreateAdminDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    password: string
}

export class CreateUserDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    email: string
}

export class PutUserIcon {
    @ApiProperty()
    user_id: number

    @ApiProperty()
    picture: string
}