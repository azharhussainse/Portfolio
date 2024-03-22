import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-single-portfolio',
  templateUrl: './single-portfolio.component.html',
  styleUrls: ['./single-portfolio.component.css']
})
export class SinglePortfolioComponent {
  porfolioId!: string;
  porfolio: any;
  content: any;
  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) {
    route.paramMap.subscribe((params) => {
      this.porfolioId = params.get('id') ?? '';
      console.log('postid', this.porfolioId);
    })

    // singlePortfolio.portfolio(this.porfolioId).subscribe((data) => {
    //   this.porfolio = data;
    //   // this.content = this.post.detail;
    // })


    const porfolioId = this.porfolioId; // Replace with the specific post ID you want to fetch
    console.log('porfolioId', porfolioId);
    this.firebaseService.getPortfolioBySlug(porfolioId).subscribe((porfolio) => {
      this.porfolio = porfolio[0];
      console.log(this.porfolio);
    });
  }
}
