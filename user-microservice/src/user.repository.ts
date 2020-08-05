import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { Logger } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger('userRepository')

  async getUser(mail: string): Promise<number> {
    const query = this.createQueryBuilder('user');
    try {
      return (await query.where('user.mail = :mail', { mail }).getOne()).id
    } catch (error) {
      this.logger.error('Faild to find user with that email address')
    }
  }

}