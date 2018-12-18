import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { SearchAlbumComponent } from './search-album/search-album.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'albums', component: AlbumComponent },
  { path: 'albums/:albumId', component: PhotosComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}