import {CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {TokenService} from "../auth/token.service";
import {Reflector} from "@nestjs/core";
import {Roles} from "../decorators/roles.decorator";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly tokenService: TokenService,
        private reflector: Reflector
    ) {
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const header = request.headers.authorization
        const role = this.reflector.getAllAndOverride(Roles, [context.getHandler(), context.getClass()]);
        if (!header) {
            throw new UnauthorizedException()
        }

        const token = header.split(' ')[1]
        if (!token) {
            throw new UnauthorizedException()
        }

        return this.isAuthenticated(token, role)
    }


    private isAuthenticated(token: string, role: any): boolean {
        const verifyToken = this.tokenService.verifyToken(token)
        if (!verifyToken) {
            throw new UnauthorizedException()
        }

        console.log(verifyToken, role)

        if (!role.includes(verifyToken.role)) {
            throw new ForbiddenException()
        }

        return true
    }
}