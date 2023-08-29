import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers } from 'src/app/+store/user.selectors';
import { IUser } from 'src/app/models/user-model';
import * as UserActions from '../../+store/user.actions';
@Component({
  selector: 'app-user-logs-sidebar',
  templateUrl: './user-logs-sidebar.component.html',
  styleUrls: ['./user-logs-sidebar.component.css'],
})
export class UserLogsSidebarComponent {
  users!: IUser[];

  constructor(private store: Store) {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(UserActions.loadUsers());

    this.store.select(selectUsers).subscribe((users) => {
      this.users = users;
    });
  }
}
