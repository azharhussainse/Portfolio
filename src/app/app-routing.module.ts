import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'home', component: HeroComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', component: SinglePortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
