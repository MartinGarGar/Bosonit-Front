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

  users: User[] = [];

  newUser!: User; 

  editedUser!: User; 

  isEdit: boolean = false;


  constructor(
    private _apiSv: ApiService,
  ) { }

  ngOnInit(): void {
    
    this._apiSv.getUsers().subscribe(
      users => {
        this.users = users;
      }
    )


    
  }

  createUser() {
    this._apiSv.userObservable$.subscribe((user: User) => {
      this.newUser = user;
    })
  }

  editUser(user: User) {
    this._apiSv.setUser(user);
    this._apiSv.setUserSubject$(user);
  }

  deleteUser(user: User) {
    this._apiSv.deleteUser(user.id!).subscribe(
      () => {
        this.ngOnInit();
      }
    );

    
    
  }

}