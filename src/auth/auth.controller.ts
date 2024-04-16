import {BadRequestException, Body, Controller, HttpStatus, Put, Req, Res} from "@nestjs/common";
import {LoginAdminDto, LoginUserDto} from "./dto";
import {AuthService} from "./auth.service";
import {Response, Request} from 'express'

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
            return response.status(HttpStatus.OK).json({
                user: loginInfo.currentUser,
                accessToken: loginInfo.tokens.accessToken
            })
        } catch (e) {
            response.status(401).json(e.message)
        }

    }

    @Put('admin-login')
    async adminLogin(@Body() userInfo: LoginAdminDto, @Res() response: Response) {
        try {
            const loginInfo = await this.authService.adminLogin(userInfo)
            response.cookie('refreshToken', loginInfo.tokens.refreshToken, {httpOnly: true})
            return response.status(HttpStatus.OK).json({
                user: loginInfo.currentUser,
                accessToken: loginInfo.tokens.accessToken
            })
        } catch (e) {
            response.status(401).json(e.message)
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

    @Put('refresh')
    async refreshToken(@Res() response: Response, @Req() request: Request) {
        try {
            const refreshToken = request.cookies['refreshToken']
            if (!refreshToken) {
                return new BadRequestException()
            }

            const userWithTokens = await this.authService.refreshTokens(refreshToken)
            response.cookie('refreshToken', userWithTokens.refreshToken, {httpOnly: true})
            delete userWithTokens.refreshToken
            return response.status(HttpStatus.OK).json({
                ...userWithTokens
            })
        } catch(e) {
            response.status(401).json(e.message)
        }
    }
}