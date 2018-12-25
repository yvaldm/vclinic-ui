import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.currentUser = this.userService.getUser().subscribe(() => {
    });
  }
}
