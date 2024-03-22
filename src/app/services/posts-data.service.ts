import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  constructor(private http: HttpClient) { }

  posts() {
    return this.http.get('http://localhost:3000/posts');
  }
}
