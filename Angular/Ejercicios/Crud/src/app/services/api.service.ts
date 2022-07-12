import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


import { User } from '../interfaces/user.interface';
import { Observable, Observer, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  private _url: string = 'http://localhost:3000'; 
  
  public _user!: User;

  public _usersList: User [] = []

  private _userSubject$: Subject<User> = new Subject();
  public userObservable$ = this._userSubject$.asObservable();


  getUser () {
    return {...this._user};
  }

  setUser (user: User) {
    this._user = user;
  }

  setUserSubject$ (user: User) {
    this._userSubject$.next(user);
  }
  
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${ this._url }/users`);
  }


  createUser(user: User): Observable<User> {
    
    return this.http.post<User>(`${this._url}/users`, user);    
  }

  editUser(user: User): Observable<User> {

    return this.http.put<User>(`${this._url}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this._url}/users/${id}`);
  }

  loadUsers() {
    
    this.getUsers().subscribe(
      users => {
        this._usersList = users;
        console.log('lista en api',this._usersList);
        
      }
    )
  }


}