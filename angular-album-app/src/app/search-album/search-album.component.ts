import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.css']
})
export class SearchAlbumComponent implements OnInit {

  @Input('dispAlbm') dispAlbm: any[];

  constructor() { }

  ngOnInit() {
  }

}
