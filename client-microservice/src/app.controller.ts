import { Controller, Get, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPostService } from './userPost.service';
import { Observable, from } from 'rxjs';
import { PostService } from './post.service';

@Controller()
export class AppController {
  private postsToSend: { id: number, imageUrl: 'string' }[]
  constructor(
    private userService: UserService,
    private userPostService: UserPostService,
    private postService: PostService,
  ) { }


  @Get('feed')
  async getUserId(@Headers() headers) {
    let res
    const userId = this.userService.getUser(headers.user)
    console.log(await userId.toPromise());
    
    const unreaded = this.userPostService.getUnreadedPosts(await userId.toPromise())

    return this.postService.getPosts(JSON.parse(await unreaded.toPromise()))
  
  }
}
