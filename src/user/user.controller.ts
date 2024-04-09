import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto} from "./dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Post('create-admin')
    createAdminAccount() {

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