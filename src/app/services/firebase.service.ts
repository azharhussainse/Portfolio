import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getProfile() {
    return this.db.list('profile').valueChanges();
  }
  getPosts() {
    return this.db.list('posts').valueChanges();
  }
  getPost(postId: string): Observable<any> {
    return this.db.object(`posts/${postId}`).valueChanges();
  }
  getPostBySlug(slug: string): Observable<any> {
    return this.db
      .list('/posts', (ref) =>
        ref.orderByChild('slug').equalTo(slug).limitToFirst(1)
      )
      .valueChanges();
  }
  getPortfolios(){
    return this.db.list('portfolios').valueChanges();
  }
  getPortfolioBySlug(slug: string): Observable<any> {
    return this.db
      .list('/portfolios', (ref) =>
        ref.orderByChild('slug').equalTo(slug).limitToFirst(1)
      )
      .valueChanges();
  }
}
