import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { IPhotos } from '../interfaces/photos.model';
import { IUsers } from '../interfaces/users.model';
import { error } from 'util';
import { IAlbum } from '../interfaces/ialbum';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: IPhotos[];
  users: IUsers;
  albums: IAlbum;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    let albumId: string = this.route.snapshot.paramMap.get('albumId'); 
    //let userId: string = this.route.snapshot.paramMap.get('userId');

    this.apiService.getPhotosOfAlbum(albumId).subscribe((photos) => {
      this.photos = photos;
      }, (error) => {
      console.error('Unable to get photos: ', error);
    });

   
        this.apiService.getUserIdOfAlbum(albumId)
          .subscribe((albums) => {
            this.albums = albums;
            console.log(this.albums);
              this.apiService.getUserOfAlbum(this.albums.userId)
                .subscribe((user) => {
                  this.users = user;
                  console.log(this.users);
                },(error) => {
                  console.log('Unable to get User Data: ',error);
                });
            });
            // 
          (error) => {
            console.error('Unable to get Album data: ', error);
            this.users =  null;
          };

  }

}
