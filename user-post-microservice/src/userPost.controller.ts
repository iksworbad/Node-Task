import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserPostService } from './userPost.service'


@Controller()
export class userPostController {
  private logger = new Logger('PostController')
  constructor(
    private userPostService: UserPostService
  ) { }

  @MessagePattern('getUnreadedPosts')
  async handleMessagePrinted(data: number) {
    this.logger.log('Get unreaded posts for user id: ' + data)
    return this.userPostService.getPosts(data)
 }
}
