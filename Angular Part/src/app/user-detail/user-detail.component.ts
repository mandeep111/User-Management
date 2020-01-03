import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  user_id = this.route.snapshot.params['user_id'];
  
  users: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.FindUser(this.user_id)
      .subscribe(data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['users'])
  }
}
