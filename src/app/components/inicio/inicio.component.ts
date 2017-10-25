import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  currentUser;
  users = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  // deleteUser(_id: string) {
  //     this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  // }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
