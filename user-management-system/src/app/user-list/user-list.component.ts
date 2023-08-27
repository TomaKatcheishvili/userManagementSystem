import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IUser } from '../models/user-model';
import { UserServiceService } from '../services/user-service.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: IUser[];
  selectedUser: IUser | undefined;

  @ViewChildren(UserProfileComponent)
  userProfileComponents!: QueryList<UserProfileComponent>;

  constructor(private userService: UserServiceService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  navigateToUserProfile(user: IUser) {
    this.selectedUser = user;
    console.log(this.userProfileComponents);
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
}
