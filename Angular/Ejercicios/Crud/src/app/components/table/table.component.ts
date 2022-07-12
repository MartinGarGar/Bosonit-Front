import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit{

  public get users(): User[] {
    return  this._apiSv._usersList;;
  }
  public set users(value: User[]) {
   this._apiSv._usersList = value;
  }

  newUser!: User; 


  constructor(
    private _apiSv: ApiService,
  ) {   this._apiSv.loadUsers() }

  ngOnInit(): void {   

  }




  editUser(user: User) {
    this._apiSv.setUser(user);
    this._apiSv.setUserSubject$(user);
    this._apiSv.loadUsers()
  }

  deleteUser(user: User) {
    this._apiSv.deleteUser(user.id!).subscribe(
      () => {
        this._apiSv.loadUsers();
      }
    );

     
  }
  

}