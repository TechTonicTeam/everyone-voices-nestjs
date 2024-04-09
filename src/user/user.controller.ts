import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {CreateAdminDto, CreateUserDto} from "./dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Post('create-admin')
    async createAdminAccount(@Body() userInfo: CreateAdminDto) {
        try {
            return await this.userService.createNewAdmin(userInfo)
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Post('create-user')
    async createUserAccount(@Body() userInfo: CreateUserDto) {
        try {
            return await this.userService.createNewUser(userInfo)
        } catch (e) {
            throw new BadRequestException(e.message)
        }
    }
}