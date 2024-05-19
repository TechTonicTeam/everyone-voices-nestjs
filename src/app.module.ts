import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UserModule} from "./user/user.module";
import {AuthModule} from "./auth/auth.module";
import {JwtModule} from "@nestjs/jwt";
import {PostModule} from "./post/post.module";
import {CommentModule} from "./comment/comment.module";
import {ReportModule} from "./report/report.module";

@Module({
  imports: [
      UserModule,
      AuthModule,
      PostModule,
      CommentModule,
      ReportModule,
      ConfigModule.forRoot({isGlobal: true}),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('POSTGRES_HOST'),
          port: configService.get('POSTGRES_PORT'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DB'),
          entities: [__dirname + '/**/*.entity{.js, .ts}'],
          synchronize: true,
        }),
        inject: [ConfigService],
      }),
      JwtModule.register({
          global: true,
          secret: 'JWT_SECRET_KEY',
          signOptions: {expiresIn: '30m'}
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
