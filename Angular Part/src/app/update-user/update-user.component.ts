import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user_id: number;
  user: User;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.user_id = this.route.snapshot.params['user_id'];
    

    this.userService.FindUser(this.user_id)
      .subscribe(data => { 
        this.user = data;
        console.log(data);
      }, error => console.log(error));

  }
  onSubmit() {
    var name = document.forms["update"]["user_name"].value;
    var address = document.forms["update"]["address"].value;
    var phone = document.forms["update"]["phone"].value;
    var job = document.forms["update"]["job"].value;

    if (name == "" || address == "" || phone == "" || job == "") {
      alert("Field must be filled");
    } else {
      this.updateUser();
    }
  }

  updateUser() {
    this.userService.UpdateUser(this.user_id, this.user)
      .subscribe(data => console.log(data),
      error => console.log(error));
      this.user = new User();
      this.goToHome();
  }

  goToHome() {
    this.userService.FindAll().subscribe(
      data=> {this.user = data;
      });   
    this.router.navigate(['users'])
  }

}
