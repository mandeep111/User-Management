import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  // users: User;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.CreateUser(this.user)
    .subscribe(error => console.log(error));
    this.user = new User();
    this.goToHome();
  }

  goToHome() {
    this.userService.FindAll().subscribe(
      data=> {this.user = data;
      });
    this.router.navigate(['users'])
  }

  onSubmit() {
    var name = document.forms["create"]["user_name"].value;
    var address = document.forms["create"]["address"].value;
    var phone = document.forms["create"]["phone"].value;
    var job = document.forms["create"]["job"].value;

    if (name == "" || address == "" || phone == "" || job == "") {
      alert("Field must be filled");
    } else {
      this.submitted = true;
      this.save();
    }
    
  }

}
