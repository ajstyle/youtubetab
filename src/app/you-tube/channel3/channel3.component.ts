import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-channel3',
  templateUrl: './channel3.component.html',
  styleUrls: ['./channel3.component.css']
})
export class Channel3Component implements OnInit {

data ;
videos ;
 constructor( private ApiService : ApiService ) {
  }
  ngOnInit() {
    this.ApiService.getVideos('snippet' , 'UC29ju8bIPH5as8OGnQzwJyA' , '10').subscribe(data => {
      this.data = data;
      this.videos =  this.data.items ;

    }) ;
  }
}



