import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.cofing';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
