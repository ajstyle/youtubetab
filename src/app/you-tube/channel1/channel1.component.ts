import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-channel1',
  templateUrl: 'channel1.component.html',
  styleUrls: ['./channel1.component.css']
})
export class Channel1Component implements OnInit {
data ;
videos ;
    constructor( private ApiService : ApiService ) {

  }
 ngOnInit() {
    this.ApiService.getVideos('snippet' , 'UCf93fPKwotph47H3_KDcRyg' , '10').subscribe(data => {
      this.data = data;
      this.videos =  this.data.items ;

   }
) ;



 }
}
