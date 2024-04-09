import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import {pbkdf2Sync} from 'crypto'
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Users} from "../entitis/user.entity";

@Injectable()

export class PasswordService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>
    ) {
    }
    generatePasswordHash(password: string) {
        return pbkdf2Sync(password, 'salt-key', 1000, 64, 'sha512').toString('hex')
    }

    async verifyPassword(currentUser: Users, password: string) {
        const enteredPassword = this.generatePasswordHash(password)
        if (currentUser.password !== enteredPassword) {
            throw new UnauthorizedException()
        }
        return true
    }
}