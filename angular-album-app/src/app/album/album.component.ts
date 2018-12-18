import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { IAlbum } from '../interfaces/ialbum';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumArray: IAlbum[];
         srchAlbm: string;
         dispAlbm: any[];
         albmFound: boolean;
         options = ['Ascending', 'Descending' , 'Default'];
         optionSelected: any;

  constructor(private apiService: ApiService) { }

  getAlbums(): void {
    this.apiService.getAlbums()
        .subscribe( (response) => {
          this.albumArray = response
        },(error) => {
          console.error('Unable to get photos: ', error);
        });
  }

  displayAlbum() {
    this.dispAlbm = [];
    for(let i of this.albumArray) {
      if(i.title.includes(this.srchAlbm)) {
        this.albmFound = true;
        this.dispAlbm.push(
          {
            id: i.id,
            title: i.title
          }
        );
      }
    }
  }

  onOptionsSelected(event){
    
    if(event == 'Ascending') {

      this.albumArray.sort((a, b) =>
       
      (a.title < b.title) ?  //sort string ascending
       -1 :
     ((a.title > b.title) ? 1 : 0
       //default return value (no sorting)
 ));
    } else if(event == 'Descending') {

      this.albumArray.sort((a,b) =>
      (a.title > b.title) ? // sort in descending
      -1:
      ((a.title < b.title) ? 1 : 0
    ));
    } else {
      this.getAlbums();
    }
   
   }

  ngOnInit(): void {
    this.getAlbums();
}

}
