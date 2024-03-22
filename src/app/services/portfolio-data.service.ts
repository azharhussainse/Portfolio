import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor(private http: HttpClient) { }

  portfolios() {
    return this.http.get('http://localhost:3000/portfolios');
  }
}
