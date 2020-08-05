import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { UserPostService } from './userPost.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    UserService,
    PostService,
    UserPostService
  ],
})
export class AppModule { }
