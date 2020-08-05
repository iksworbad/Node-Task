import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostService } from './post.service';


@Controller()
export class PostController {
  private logger = new Logger('PostController')
  constructor(
    private PostService: PostService
  ) { }

  @MessagePattern('getPosts')
  async handleMessagePrinted(data: number[]) {
    
    this.logger.log('Find posts by id: ' + data)
    return this.PostService.getPosts(data)
 }
}
