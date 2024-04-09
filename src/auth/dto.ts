import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty()
    email: string

    @ApiProperty()
    password: string
}

export class LoginAdminDto {
    @ApiProperty()
    email: string
}