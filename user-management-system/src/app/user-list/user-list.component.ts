import { Component } from '@angular/core';
import { mockUsers } from '../mock-data/users-mock-data';
import { IUser } from '../models/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: IUser[] = mockUsers;
}
