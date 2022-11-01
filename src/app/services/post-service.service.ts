import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'app/models/post';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  baseURL = environment.apiUrlFalse + 'users';

  constructor(private http: HttpClient) { }

/*
  getUser(postId: string): Observable<Post> {
    const url = this.baseURL + postId;
    return this.http.get<Post>(url);
  }*/


  getAllUsers(): Observable<Post[]>{
    const url = this.baseURL;
    return this.http.get<Post[]>(url);
  }
}
