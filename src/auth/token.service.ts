import {BadRequestException, Injectable} from "@nestjs/common";
import {JwtService} from '@nestjs/jwt'
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/user.entity";
import {Repository} from "typeorm";
import {Token} from "../entities/token.entity";
@Injectable()
export class TokenService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Token)
        private readonly tokenRepository: Repository<Token>,
        private jwtService: JwtService
    ) {
    }
    generateTokenPairs(userInfo: object) {
        const accessToken = this.jwtService.sign({...userInfo}, {expiresIn: '1h'})
        const refreshToken = this.jwtService.sign({...userInfo}, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveRefreshToken(token: string, currentUser: Users) {
        const currentToken = await this.tokenRepository.findOne({where: {Users: currentUser}})
        if (currentToken) {
            await this.tokenRepository.delete(currentToken)
        }
        await this.tokenRepository.save({token, Users: currentUser})
        return currentUser
    }

    async deleteRefreshToken(currentUser: Users) {
        const currentToken = await this.tokenRepository.findOne({where: {Users: currentUser}})
        if (!currentToken) {
            throw new BadRequestException()
        }

        await this.tokenRepository.delete(currentToken)
    }

    verifyToken(token: string) {
        return this.jwtService.verify(token)
    }
}