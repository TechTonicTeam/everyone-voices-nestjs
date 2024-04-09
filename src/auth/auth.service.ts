import {BadRequestException, Injectable} from "@nestjs/common";
import {LoginAdminDto, LoginUserDto} from "./dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entitis/user.entity";
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

    async userLogin(userInfo: LoginUserDto) {
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

    async adminLogin(userInfo: LoginAdminDto) {
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
}
