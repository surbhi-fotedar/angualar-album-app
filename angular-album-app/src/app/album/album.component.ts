import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { IAlbum } from '../ialbum';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumArray: IAlbum[];

  constructor(private apiService: ApiService) { }

  getAlbums(): void {
    this.apiService.getAlbums()
        .subscribe( response => this.albumArray = response,
        error => console.log('Error ::' + error));
  }

  ngOnInit(): void {
    this.getAlbums();
}

}
