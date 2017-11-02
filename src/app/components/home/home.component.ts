import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  estudiante;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.estudiante = this.userService.getById(JSON.parse(localStorage.getItem('token'))._id, JSON.parse(localStorage.getItem('token')).token).subscribe(estudiante => { this.estudiante = estudiante; });
    
  }

}
