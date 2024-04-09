import {BadRequestException, Body, Controller, HttpStatus, Put, Res} from "@nestjs/common";
import {LoginAdminDto, LoginUserDto} from "./dto";
import {AuthService} from "./auth.service";
import {Response} from 'express'

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {
    }
    @Put('user-login')
    async userLogin(@Body() userInfo: LoginUserDto, @Res() response: Response) {
        try {
            const loginInfo = await this.authService.userLogin(userInfo)
            response.cookie('refreshToken', loginInfo.tokens.refreshToken, {httpOnly: true})
            response.status(HttpStatus.OK).json({
                user: loginInfo.currentUser,
                accessToken: loginInfo.tokens.accessToken
            })
        } catch (e) {
            return new BadRequestException(e.message)
        }

    }

    @Put('admin-login')
    async adminLogin(@Body() userInfo: LoginAdminDto, @Res() response: Response) {
        try {
            const loginInfo = await this.authService.adminLogin(userInfo)
            response.cookie('refreshToken', loginInfo.tokens.refreshToken, {httpOnly: true})
            response.status(HttpStatus.OK).json({
                user: loginInfo.currentUser,
                accessToken: loginInfo.tokens.accessToken
            })
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }

    @Put('logout')
    async logout(@Body() email: LoginAdminDto, @Res() response: Response) {
        try {
            await this.authService.logoutFunction(email)
            response.clearCookie('refreshToken')
            return response.status(HttpStatus.OK).json('Успешный выход')
        } catch (e) {
            return new BadRequestException(e.message)
        }
    }
}