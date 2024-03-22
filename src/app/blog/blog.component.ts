import { Component } from '@angular/core';
import { PostsDataService } from '../services/posts-data.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts: any;
  constructor(private myposts: PostsDataService, private firebaseService: FirebaseService) {
    // myposts.posts().subscribe((data) => {
    //   this.posts = data;
    // })

    this.firebaseService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log('firedata', this.posts);
    });
  }
}
