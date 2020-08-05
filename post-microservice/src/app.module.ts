import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.cofing';
import { PostRepository } from './post.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([PostRepository])
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
