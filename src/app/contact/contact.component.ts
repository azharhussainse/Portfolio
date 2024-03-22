import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { MyProfileDataService } from '../services/my-profile-data.service';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // data = {
  //   phone: '+923343458113',
  //   email: 'haider8278@gmail.com',
  //   address: 'Lahore, Punjab, Pakistan',
  // }



  title = 'Contact Form'

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    comments: new FormControl(''),
  });
  submitted = false;

  data: any;
  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService) {
    this.firebaseService.getProfile().subscribe((data) => {
      this.data = data[0];
      console.log('firedata', this.data);
    });
  }
  //constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        comments: ['', Validators.required],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));

  }

  getYear() {
    return new Date().getFullYear();
  }

  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }

}
