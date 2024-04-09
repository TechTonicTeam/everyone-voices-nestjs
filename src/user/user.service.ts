import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entitis/user.entity";
import {Repository} from "typeorm";
import {CreateAdminDto, CreateUserDto} from "./dto";
import {PasswordService} from "./password.service";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        private readonly passwordService: PasswordService
    ) {
    }

    async createNewUser(userInfo: CreateUserDto) {
        userInfo.password = this.passwordService.generatePasswordHash(userInfo.password)
        await this.userRepository.save({...userInfo, role: 'user'})
        delete userInfo.password
        return userInfo
    }

    async createNewAdmin(userInfo: CreateAdminDto) {
        await this.userRepository.save({...userInfo, role: 'admin'})
        return userInfo
    }
}