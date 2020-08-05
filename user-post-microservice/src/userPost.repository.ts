import { Repository, EntityRepository } from "typeorm";
import { Logger } from "@nestjs/common";
import { userPost } from "./userPost.entity";


@EntityRepository(userPost)
export class UserPostRepository extends Repository<userPost> {
  private logger = new Logger('PostRepository')

  async getUserPost(userId: number): Promise<string> {
    const query = this.createQueryBuilder('userPost');
    try {
      const result = (await query.where('userPost.userId = :userId', { userId }).getOne()).postsArray
      const userPosts = await query.where('userPost.userId = :userId', { userId }).getOne()
      userPosts.postsArray = '[]'
      userPosts.save()
      return result
    } catch (error) {
      this.logger.error('Could not find posts for user')
    }
  }

}