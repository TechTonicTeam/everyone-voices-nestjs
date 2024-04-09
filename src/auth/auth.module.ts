import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {TokenService} from "./token.service";
import {PasswordService} from "../user/password.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Users} from "../entitis/user.entity";
import {Token} from "../entitis/token.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users, Token])
    ],
    controllers: [AuthController],
    providers: [AuthService, TokenService, PasswordService]
})

export class AuthModule{}