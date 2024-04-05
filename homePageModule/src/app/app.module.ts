import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { NewsListComponent } from './Components/news-list/news-list.component';
import { NewsCardComponent } from './Components/news-card/news-card.component';
import { DeliverSectionComponent } from './Components/deliver-section/deliver-section.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryNamePipe } from './pipes/category-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HeroSectionComponent,
    NewsListComponent,
    NewsCardComponent,
    DeliverSectionComponent,
    CategoryNamePipe
  ],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
