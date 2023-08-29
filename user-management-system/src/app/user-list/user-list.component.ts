import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../+store/user.actions';
import { selectUsers } from '../+store/user.selectors';
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

  constructor(private store: Store, private userService: UserServiceService) {
    this.getUsers();
  }

  ngOnInit(): void {}

  navigateToUserProfile(user: IUser) {
    this.selectedUser = user;
    console.log(this.userProfileComponents);
  }

  getUsers() {
    this.store.dispatch(UserActions.loadUsers());

    this.store.select(selectUsers).subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(userId: number) {
    this.store.dispatch(UserActions.deleteUser({ userId }));
  }
}
