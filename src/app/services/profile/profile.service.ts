import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from 'app/models/profile';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = environment.apiUrl + 'profiles/';
  baseUrlJsonServe = environment.apiUrlJsonServe + 'profiles';
  constructor(private http:HttpClient) { }




  getLastestProfiles(): Observable<Profile[]> {
    const url = this.baseUrlJsonServe+'?_start=0&_end=3';
    return this.http.get<Profile[]>(url);
  }
}
