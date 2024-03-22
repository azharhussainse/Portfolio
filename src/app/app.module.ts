import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './hero/hero.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { NgxMasonryModule } from 'ngx-masonry';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SinglePortfolioComponent } from './single-portfolio/single-portfolio.component';
import { SinglePortolfioComponent } from './single-portolfio/single-portolfio.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeroComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    PostComponent,
    NoPageComponent,
    SinglePortfolioComponent,
    SinglePortolfioComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgxTypedJsModule,
    AboutModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
