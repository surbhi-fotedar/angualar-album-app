import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchAlbumComponent } from './search-album/search-album.component';
import { PhotosComponent } from './photos/photos.component';
import { LimitName } from './pipe/limitName.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    SearchAlbumComponent,
    PhotosComponent,
    LimitName
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
