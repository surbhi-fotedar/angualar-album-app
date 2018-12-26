import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { IPhotos } from '../interfaces/photos.model';
import { IUsers } from '../interfaces/users.model';
import { error } from 'util';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: IPhotos[];
  users: IUsers[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    let albumId: string = this.route.snapshot.paramMap.get('albumId'); 
    //let userId: string = this.route.snapshot.paramMap.get('userId');

    this.apiService.getPhotosOfAlbum(albumId).subscribe((photos) => {
      this.photos = photos;
      }, (error) => {
      console.error('Unable to get photos: ', error);
    });

    this.apiService.getAlbums()
    .subscribe((response) => {
      response = response;
      response.forEach((album) => {
        this.apiService.getUserOfAlbum(album.id)
          .subscribe((users) => {
            this.users = users;
            console.log(this.users);
          },(error) => {
            console.error('Unable to get Users: ', error);
            this.users =  null;
          });
      });
    });
    
  }

}
