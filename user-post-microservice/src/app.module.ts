import { Module } from '@nestjs/common';
import { userPostController } from './userPost.controller';
import { UserPostService } from './userPost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.cofing';
import { UserPostRepository } from './userPost.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([UserPostRepository])
  ],
  controllers: [userPostController],
  providers: [UserPostService],
})
export class AppModule {}
