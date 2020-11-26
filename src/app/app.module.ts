import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresedentComponent } from './presedent/presedent.component';
import { HomeComponent } from './home/home.component';
import { SecComponent } from './sec/sec.component';

@NgModule({
  declarations: [
    AppComponent,
    PresedentComponent,
    HomeComponent,
    SecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
