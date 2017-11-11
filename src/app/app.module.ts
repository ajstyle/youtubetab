import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design/material-design.module';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './api.service';
import {YouTubeModule} from './you-tube/you-tube.module' ;
@NgModule({
  declarations: [
    AppComponent,
    YouTubeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    YouTubeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
