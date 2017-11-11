import { Injectable   } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import 'rxjs/add/operator/map';
@Injectable()
export class ApiService {
apiUrl = 'https://www.googleapis.com/youtube/v3' ;
  apiKey = 'AIzaSyAFjOpYmBnaO0kB-i5n6Fbc_u8kQhnK_Os' ;

  constructor(public http :HttpClient ) { }

    getVideos(part,channelId,maxResult) {
    return this.http.get(`${this.apiUrl}/search?part=${part}&channelId=${channelId}&maxResults=${maxResult}&order=date&type=video&key=${this.apiKey}`) ;

    }
// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCf93fPKwotph47H3_KDcRyg&maxResults=10&order=date&type=video&key=AIzaSyAFjOpYmBnaO0kB-i5n6Fbc_u8kQhnK_Os
// return this.http.get(`${this.apiUrl}  '/search?part=' ${ part } '&channelId=' + channelId + '&maxResults=' +maxResult + '&order=date' + '&type=video'+'&key=' + this.apiKey`) ;

}


