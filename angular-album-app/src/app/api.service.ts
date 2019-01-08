import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAlbum } from './interfaces/ialbum';
import { IPhotos } from './interfaces/photos.model';
import { IUsers } from './interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _albumURL: string = "https://jsonplaceholder.typicode.com/albums";
 
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbum[]>{
    return this.http.get<IAlbum[]>(this._albumURL);
  }

  getPhotosOfAlbum(albumId): Observable<IPhotos[]> {
    let url = 'https://jsonplaceholder.typicode.com/albums/' + albumId + '/photos';
    return this.http.get<IPhotos[]>(url);
  }

  getAlbumDetails(albumId): Observable<IAlbum> {
    let url = 'https://jsonplaceholder.typicode.com/albums/' + albumId;
    return this.http.get<IAlbum>(url);
  }

  getUserOfAlbum(userId): Observable<IUsers> {
    let url = 'https://jsonplaceholder.typicode.com/users/' + userId;
    return this.http.get<IUsers>(url);
  } 
}
