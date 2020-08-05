import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';


@Controller()
export class UserController {
  private logger = new Logger('UserController')
  constructor(
    private userService: UserService
  ) { }

  @MessagePattern('getUser')
  async handleMessagePrinted(data: string) {
    this.logger.log('Find user by mail address: ' + data)
    return this.userService.getUser(data)
 }
}
