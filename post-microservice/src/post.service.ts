import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private PostRepository: PostRepository
  ) {}

  async getPosts(ids: number[]): Promise<Post[]> {
    const result = []
    for (let i = 0; i < ids.length; i++) 
      result.push(await this.PostRepository.getPost(ids[i]))

    return result
  }
}
