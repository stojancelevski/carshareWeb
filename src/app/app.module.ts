import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { UserModule } from 'src/app/user/user.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {  InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './data/user-data';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    HomeModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(UserData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
