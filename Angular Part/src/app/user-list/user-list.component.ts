import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.FindAll().subscribe(
      data=> {this.users = data;
      });

  }

  deleteUser(user_id: number) {
    var msg = confirm("Do you want to delete this user?");
    if (msg == true) {
      this.userService.DeleteUser(user_id)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }
  }

  updateUser(user_id:number) {
    this.router.navigate(['update', user_id]);
  }

  userDetail(user_id:number) {
    this.router.navigate(['detail', user_id]);
  }

}
