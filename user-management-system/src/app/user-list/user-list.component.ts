import { Component, QueryList, ViewChildren } from '@angular/core';
import { mockUsers } from '../mock-data/users-mock-data';
import { IUser } from '../models/user-model';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: IUser[] = mockUsers;
  selectedUser: IUser | undefined;
  isUserProfileVisible = false;

  @ViewChildren(UserProfileComponent)
  userProfileComponents!: QueryList<UserProfileComponent>;

  constructor() {}

  navigateToUserProfile(user: IUser) {
    this.selectedUser = user;
    this.isUserProfileVisible = true;
    console.log(this.userProfileComponents);
  }
}
