import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class PostService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 9002
      }
    })
  }

  public getPosts(data: number[]) {
    return this.client.send<{id: number, imageUrl: string}[], number[]>('getPosts', data)
  }
}
