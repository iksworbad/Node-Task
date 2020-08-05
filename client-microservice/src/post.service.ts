import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class PostService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      },
    })
  }

  public getPosts(data: number[]) {
    return this.client.send<{ id: number, imageUrl: string }[], number[]>('getPosts', data)
  }
}
