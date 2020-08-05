import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class UserPostService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 9003
      }
    })
  }

  public getUnreadedPosts(userId: number) {
    return this.client.send<string, number>('getUnreadedPosts', userId)
  }
}
