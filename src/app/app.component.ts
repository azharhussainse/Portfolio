import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {


  title = 'Haider Ali';

  ngOnInit() {

  }
}
