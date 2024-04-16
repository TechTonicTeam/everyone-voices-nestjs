import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "../entities/user.entity";
import {Repository} from "typeorm";
import {CreateAdminDto, CreateUserDto, PutUserIcon} from "./dto";
import {PasswordService} from "./password.service";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        private readonly passwordService: PasswordService
    ) {
    }

    async createNewAdmin(userInfo: CreateAdminDto) {
        const currentUser = await this.userRepository.findOne({where: {email: userInfo.email}})
        if (!!currentUser) {
            throw new BadRequestException('Пользователь уже существует')
        }
        userInfo.password = this.passwordService.generatePasswordHash(userInfo.password)
        await this.userRepository.save({...userInfo, role: 'admin'})
        delete userInfo.password
        return userInfo
    }

    async createNewUser(userInfo: CreateUserDto) {
        const currentUser = await this.userRepository.findOne({where: {email: userInfo.email}})
        if (!!currentUser) {
            throw new BadRequestException('Пользователь уже существует')
        }
        await this.userRepository.save({...userInfo, role: 'user'})
        return userInfo
    }

    async putUserIcon(pictureInfo: PutUserIcon) {
        if (!pictureInfo.user_id) {
            throw new BadRequestException()
        }
        const currentUser = await this.userRepository.findOneByOrFail(({id: pictureInfo.user_id}))
        if (!currentUser) {
            throw new BadRequestException()
        }
        currentUser.picture = pictureInfo.picture
        await this.userRepository.save(currentUser)
        return 'Иконка обновлена'
    }
}