import {BadRequestException, Body, Controller, Post, UseGuards} from "@nestjs/common";
import {CreateAdminDto, CreateUserDto} from "./dto";
import {UserService} from "./user.service";
import {Roles} from "../decorators/roles.decorator";
import {AuthGuard} from "../guards/auth.guard";
import {ApiBearerAuth} from "@nestjs/swagger";

@Roles(['admin'])
@Controller('user')
// @ApiBearerAuth()
// @UseGuards(AuthGuard)

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