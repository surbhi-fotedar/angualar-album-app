import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModalConfig,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


import { ApiService } from '../api.service';
import { IPhotos } from '../interfaces/photos.model';
import { IUsers } from '../interfaces/users.model';
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

  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private route: ActivatedRoute, private apiService: ApiService, config: NgbModalConfig, carouselConfig: NgbCarouselConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    carouselConfig.interval = 10000;
    carouselConfig.wrap = false;
    carouselConfig.pauseOnHover = false;
   }

  ngOnInit() {
    let albumId: string = this.route.snapshot.paramMap.get('albumId');

    this.getPhotosOfAlbum(albumId);
    this.getAlbumDetails(albumId);
 }

  getPhotosOfAlbum(albumId): void {
    this.apiService.getPhotosOfAlbum(albumId).subscribe((photos) => {
      this.photos = photos;
    }, (error) => {
      console.error('Unable to get photos: ', error);
    });
  }

  getAlbumDetails(albumId): void {
    this.apiService.getAlbumDetails(albumId)
    .subscribe((album) => {
      // this.albums = albums;
      this.apiService.getUserOfAlbum(album.userId)
        .subscribe((user) => {
          this.users = user;
        }, (error) => {
          console.log('Unable to get User Data: ', error);
        });
    });
  (error) => {
    console.error('Unable to get Album data: ', error);
    this.users = null;
  };
  }

  displaySlideshow(id): void {
    console.log(id);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
