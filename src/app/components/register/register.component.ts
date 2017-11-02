import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading = false;
  constructor(private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  registrar() {
    this.loading = true;
    this.userService.create(this.model)
    .subscribe(
      data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/home']);
            },
            error => {
              console.log(error);
                this.alertService.error(error);
                this.loading = false;
            }); 
}

}
