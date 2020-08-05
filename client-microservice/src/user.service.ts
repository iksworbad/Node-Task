import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class UserService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5673'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      }
    })
  }

  public getUser(data: string) {
    return this.client.send<number, string>('getUser', data)
  }
}
