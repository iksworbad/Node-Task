import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { UserPostService } from './userPost.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_POST_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672','amqp://localhost:5673', 'amqp://localhost:5674'],
          queue: 'cats_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ])
  ],
  controllers: [AppController],
  providers: [
    UserService,
    PostService,
    UserPostService
  ],
})
export class AppModule { }
