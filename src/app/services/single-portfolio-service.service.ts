import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SinglePortfolioServiceService {

  constructor(private http: HttpClient) { }

  portfolio(postId: string | null) {
    return this.http.get('http://localhost:3000/portfolios/' + postId);
  }
}
