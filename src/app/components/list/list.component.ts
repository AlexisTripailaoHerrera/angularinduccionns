import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [UserService]
})

export class ListComponent implements OnInit{
  users: User[];
  constructor(private _userService: UserService){
    this.users = [];
  }

  ngOnInit(){
    this.getUser();
  }

  /*
  getUser(pageNumber: any){
    this._userService.getUsers(pageNumber).subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.log(error);
      }
    );
  }
  */

  getUser(){
    this._userService.getUsers(1).subscribe({
      next: (response) => {
        this.users = response.data;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  deleteUser(id:any, index:any){
    this._userService.deleteUser(id).subscribe({
      next: (response) => {
        /*Una vez se ha eliminado en el back
        procedemos a eliminarlo drectamente del array para evitar
        tener que llamar nuevamente al método get*/
        this.users.splice(index, 1);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
