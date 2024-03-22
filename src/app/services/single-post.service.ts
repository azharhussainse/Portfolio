import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SinglePostService {

  constructor(private http: HttpClient) { }

  post(postId:string | null) {
    return this.http.get('http://localhost:3000/posts/'+postId);
  }
}
