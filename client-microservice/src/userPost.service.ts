import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class UserPostService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5674'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      }
    })
  }

  public getUnreadedPosts(userId: number) {
    return this.client.send<string, number>('getUnreadedPosts', userId)
  }
}
