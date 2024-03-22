import { Component } from '@angular/core';
import { MyProfileDataService } from '../services/my-profile-data.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  data: any;
  firedata: any;
  profileData: any;
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getProfile().subscribe((data) => {
      this.data = data[0];
      console.log('firedata', this.data);
    });
  }
}
