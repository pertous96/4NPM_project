import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ActionsModule } from './actions/actions.module';
import { TypeActionsModule } from './type-actions/type-actions.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpassword',
      database: 'teamcalendar',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    ActionsModule,
    TypeActionsModule,
    RolesModule,
    AuthModule,
    // autres modules
  ],
})
export class AppModule {}
