import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-channel2',
  templateUrl: './channel2.component.html',
  styleUrls: ['./channel2.component.css']
})
export class Channel2Component implements OnInit {

data ;
videos ;
 constructor( private ApiService : ApiService ) {
  }
  ngOnInit() {
    this.ApiService.getVideos('snippet' , 'UC9YoIYdh4GGOsAr4Nt5HM6Q' , '10').subscribe(data => {
      this.data = data;
      this.videos =  this.data.items ;

    }) ;

}
}
