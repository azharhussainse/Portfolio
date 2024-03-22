import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../services/portfolio-data.service';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {


  portfolios: any;
  constructor(private myPortfolios: PortfolioDataService, private firebaseService: FirebaseService) {
    // myPortfolios.portfolios().subscribe((data) => {
    //   this.portfolios = data;
    // })

    this.firebaseService.getPortfolios().subscribe((data) => {
      this.portfolios = data;
      console.log('portfolios', this.portfolios);
    });
  }

  openModal(modelId: string) {
    const modal = document.getElementById(modelId);
    console.log(modal,modelId);
    if (modal != null) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModal(modelId: string) {
    const modal = document.getElementById(modelId);
    if (modal != null) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  activeCategory: string = 'all'; // Initialize with 'all' as the active category

  updateCategory(category: string) {
    // Remove active class from all pill-button elements
    document.querySelectorAll('.pill-button').forEach((element) => {
      element.classList.remove('active');
    });

    // Add active class to the clicked category
    document.querySelector(`[data-filter="${category}"]`)?.classList.add('active');

    // Your logic to execute when the element is clicked
    console.log(category);

    if (category == 'all') {
      document.querySelectorAll('.portfolio-item.hide').forEach((element) => {
        element.classList.remove('hide');
        element.classList.add('fadein');
      });
    } else {
      document.querySelectorAll('.portfolio-item').forEach((element) => {
        element.classList.add('hide');
      });
      document.querySelectorAll(category).forEach((element) => {
        element.classList.remove('hide');
        element.classList.add('fadein');
      });
    }

    // Update the active category
    this.activeCategory = category;
  }




}

