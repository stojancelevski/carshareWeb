import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routes } from '../models/routes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 private userUrl = 'api/users';
  private routesUrl = 'api/routes';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }
  getRoutes(): Observable<Routes> {
    return this.http.get<Routes>(this.routesUrl);
  }

}
