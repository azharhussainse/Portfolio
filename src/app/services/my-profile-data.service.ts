import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProfileDataService {

  items: Observable<any[]>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.items = db.list('profile').valueChanges();
    console.log(db.list('posts').valueChanges());
  }

  profileFirebase() {
    this.items = this.db.list('profile').valueChanges();
  }
  profile() {
    const data = this.http.get('http://localhost:3000/profile');
    return data;
  }
}
