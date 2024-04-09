import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../entitis/user.entity";
import {PasswordService} from "./password.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    controllers: [UserController],
    providers: [UserService, PasswordService]
})

export class UserModule {}