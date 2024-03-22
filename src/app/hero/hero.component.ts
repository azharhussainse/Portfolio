import { Component, OnInit } from '@angular/core';
import ParticlesConfig from '../ParticlesConfig';
import { MyProfileDataService } from '../services/my-profile-data.service';
import { FirebaseService } from '../services/firebase.service';
declare var particlesJS: any;
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit  {

  data: any;
  firedata: any;
  profileData: any;
  constructor(profileData: MyProfileDataService, private firebaseService: FirebaseService){
    this.profileData = profileData;
    this.firebaseService.getProfile().subscribe((data) => {
      console.log('firedata', this.firedata);
      this.data = data[0];
    });
  }

  ngOnInit() {

    // this.profileData.profile().subscribe((data: any) => {
    //   this.data = data;
    // })

    //this.scrollToAnchor();
    // https://vincentgarreau.com/particles.js/
    particlesJS('hero', ParticlesConfig, function () {
      console.log('callback - particles.js config loaded');
    });
  }


}
