import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AboutmeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    AboutmeComponent
  ]

})
export class AboutModule { }
