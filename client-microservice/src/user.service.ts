import { Injectable } from "@nestjs/common";
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

@Injectable()
export class UserService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 9000
      }
    })
  }

  public getUser(data: string) {
    return this.client.send<number, string>('getUser', data)
  }
}
