import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MyProfileDataService } from '../../services/my-profile-data.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {

  // data: any;
  // constructor(profileData: MyProfileDataService) {
  //   profileData.profile().subscribe((data) => {
  //     console.warn(data);
  //     this.data = data;
  //   })
  // }

  data: any;
  firedata: any;
  profileData: any;
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getProfile().subscribe((data) => {
      this.data = data[0];
      console.log('firedata', this.data);
    });
  }


  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    stagePadding: 5,
    nav: false,
    autoplay: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 700,
    autoplayHoverPause: false,
    //responsiveClass: true,
    //rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      992: {
        items: 1,
        nav: false,
      },

    }
  }


}
