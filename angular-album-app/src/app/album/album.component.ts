import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { IAlbum } from '../interfaces/ialbum';
import { IPhotos } from '../interfaces/photos.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumArray: IAlbum[];
  photos: IPhotos[];

  srchAlbm: string;
  dispAlbm: any[];
  options = ['Ascending', 'Descending', 'Default'];
  optionSelected: any;
  temp: any[];

  constructor(private apiService: ApiService) { }

  getAlbums(): void {
    this.apiService.getAlbums()
      .subscribe((response) => {
        this.albumArray = response;
        this.albumArray.forEach((album) => {
          this.apiService.getPhotosOfAlbum(album.id)
            .subscribe((photos) => {
              album.photoCount =  photos.length;
            }, (error) => {
              console.error('Unable to get photo count: ', error);
              album.photoCount =  null;
            });
        });

      }, (error) => {
        console.error('Unable to get photos: ', error);
      });

  }

  displayAlbum(): void {
    this.dispAlbm = [];
    for (let i of this.albumArray) {
      if (i.title.includes(this.srchAlbm)) {
        this.dispAlbm.push(
          {
            id: i.id,
            title: i.title
          }
        );
      }
    }
  }

  onOptionsSelected(event) {

    if (event == 'Ascending') {

      this.albumArray.sort((a, b) =>

        (a.title < b.title) ?  //sort string ascending
          -1 :
          ((a.title > b.title) ? 1 : 0
            //default return value (no sorting)
          ));
    } else if (event == 'Descending') {

      this.albumArray.sort((a, b) =>
        (a.title > b.title) ? // sort in descending
          -1 :
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
