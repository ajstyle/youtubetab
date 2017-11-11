import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Channel1Component } from './channel1/channel1.component';
import { Channel2Component } from './channel2/channel2.component' ;
import { Channel3Component } from './channel3/channel3.component' ;
import {MaterialDesignModule} from '../material-design/material-design.module';
import { Channel4Component } from './channel4/channel4.component'
@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [
    Channel1Component,
    Channel2Component,
    Channel3Component,
    Channel4Component
  ],
  exports : [
    Channel1Component,
    Channel2Component,
    Channel3Component,
    Channel4Component
  ]

})
export class YouTubeModule { }
