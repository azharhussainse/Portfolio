import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SinglePostService } from '../services/single-post.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId!: string;
  post: any;
  content: any;
  constructor(private route: ActivatedRoute, singlePost: SinglePostService, private firebaseService: FirebaseService) {
    route.paramMap.subscribe((params) => {
      this.postId = params.get('id') ?? '';
    })

    // singlePost.post(this.postId).subscribe((data) => {
    //   this.post = data;
    //   // this.content = this.post.detail;
    // })
  }

  ngOnInit() {

    const postId = this.postId; // Replace with the specific post ID you want to fetch
    console.log('postid', postId);
    this.firebaseService.getPostBySlug(postId).subscribe((post) => {
      this.post = post[0];
      console.log({ post });
    });

  }

}
