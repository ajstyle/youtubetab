import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-channel4',
  templateUrl: './channel4.component.html',
  styleUrls: ['./channel4.component.css']
})
export class Channel4Component implements OnInit {


data ;
videos ;
 constructor( private ApiService : ApiService ) {
  }
  ngOnInit() {
    this.ApiService.getVideos('snippet' , 'UCgKjHnMbrOK8xLzAwHO0aSg' , '10').subscribe(data => {
      this.data = data;
      this.videos =  this.data.items ;

    }) ;
  }

}

