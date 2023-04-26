import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessagesService } from './services/messages.service'; './services/messages.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { TweetComponent } from './views/tweet/tweet.component';
import { PostComponent } from './views/post/post.component'; 
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { AvatarComponent } from './views/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetComponent,
    PostComponent,
    HomeComponent,
    FooterComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
