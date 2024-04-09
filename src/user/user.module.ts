import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../entitis/user.entity";
import {PasswordService} from "./password.service";
import {AuthGuard} from "../guards/auth.guard";
import {TokenService} from "../auth/token.service";
import {Token} from "../entitis/token.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Token])
    ],
    controllers: [UserController],
    providers: [UserService, PasswordService, TokenService, AuthGuard]
})

export class UserModule {}