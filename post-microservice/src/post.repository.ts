import { Repository, EntityRepository } from "typeorm";
import { Logger } from "@nestjs/common";
import { Post } from "./post.entity";


@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  private logger = new Logger('PostRepository')

  async getPost(id: number): Promise<Post> {
    const query = this.createQueryBuilder('post');
    try {
      return query.where('post.id = :id', { id }).getOne()
    } catch (error) {
      this.logger.error('Faild to find user with that email address')
    }
  }

}