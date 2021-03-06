import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Wheather } from '../interfaces/wheather.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor( private http: HttpClient) { }



  getWheatherbyId(id : string) : Observable<Wheather> {
    return this.http.get<Wheather>(`http://api.weatherunlocked.com/api/current/${id}?app_id=b29387b2&app_key=3c89eefa24ffda96559ad63e7fe1d9db`)
  }
}
