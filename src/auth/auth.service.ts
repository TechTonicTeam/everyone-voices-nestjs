import {BadRequestException, Injectable} from "@nestjs/common";
import {LoginAdminDto, LoginUserDto} from "./dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/user.entity";
import {Repository} from "typeorm";
import {TokenService} from "./token.service";
import {PasswordService} from "../user/password.service";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private readonly tokenService: TokenService,
        private readonly passwordService: PasswordService
    ) {
    }

    async adminLogin(userInfo: LoginAdminDto) {
        const currentUser = await this.userRepository.findOne({where: {email: userInfo.email}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        const verifyPassword = this.passwordService.verifyPassword(currentUser, userInfo.password)

        if (!verifyPassword) {
            throw new BadRequestException('Неверный логин/пароль')
        }
        delete currentUser.password

        const tokens = this.tokenService.generateTokenPairs(currentUser)

        await this.tokenService.saveRefreshToken(tokens.refreshToken, currentUser)
        return {
            currentUser,
            tokens
        }
    }

    async userLogin(userInfo: LoginUserDto) {
        const currentUser = await this.userRepository.findOne({where: {email: userInfo.email}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        const tokens = this.tokenService.generateTokenPairs(currentUser)

        await this.tokenService.saveRefreshToken(tokens.refreshToken, currentUser)
        return {
            currentUser,
            tokens
        }
    }

    async logoutFunction(email: LoginAdminDto) {
        const currentUser = await this.userRepository.findOne({where: {...email}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        await this.tokenService.deleteRefreshToken(currentUser)
        return 'Успешный выход'
    }

    async refreshTokens(token: string) {
        const verifyToken = this.tokenService.verifyToken(token)
        if (!verifyToken) {
            throw new BadRequestException()
        }

        const currentUser = await this.userRepository.findOne({where: {email: verifyToken.email}})
        if (!currentUser) {
            throw new BadRequestException()
        }

        delete currentUser.password
        const newTokens = this.tokenService.generateTokenPairs(currentUser)
        await this.tokenService.saveRefreshToken(newTokens.refreshToken, currentUser)
        return {user: currentUser, ...newTokens}
    }
}
