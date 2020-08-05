import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPostRepository } from './userPost.repository';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPostRepository)
    private userPostRepository: UserPostRepository
  ) {}

  getPosts(id: number): Promise<string> {
    return this.userPostRepository.getUserPost(id)
  }
}
