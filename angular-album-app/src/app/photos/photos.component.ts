import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { IPhotos } from '../interfaces/photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: IPhotos[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    let albumId: string = this.route.snapshot.paramMap.get('albumId'); 
    this.apiService.getPhotosOfAlbum(albumId).subscribe((photos) => {
      this.photos = photos;
    }, (error) => {
      console.error('Unable to get photos: ', error);
    })
  }

}
