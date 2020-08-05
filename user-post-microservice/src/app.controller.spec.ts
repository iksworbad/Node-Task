import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './userPost.controller';
import { PostService } from './userPost.service';

describe('AppController', () => {
  let appController: PostController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    }).compile();

    appController = app.get<PostController>(PostController);
  });

  describe('root', () => {
  });
});
