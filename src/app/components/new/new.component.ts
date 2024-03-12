import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
  providers: [UserService]
})

export class NewComponent implements OnInit{
  user: User;
  constructor(private _userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    /*Para este ejemplo crearemos un usuario estatico
    ya que lo importante es como se pasan por parametro los datos*/
    this.user.name="juan";
    this.user.job="informático";
    this.createUser(this.user);
  }

  createUser(obj:User){
    //Creo un objeto con las propiedades name y job
    this._userService.createUser(obj).subscribe({
      next: (response) => {
        this.user = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
