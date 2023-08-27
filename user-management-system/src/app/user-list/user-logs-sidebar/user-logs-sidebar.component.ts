import { Component } from '@angular/core';
import { mockUsers } from 'src/app/mock-data/users-mock-data';
import { IUser } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-logs-sidebar',
  templateUrl: './user-logs-sidebar.component.html',
  styleUrls: ['./user-logs-sidebar.component.css'],
})
export class UserLogsSidebarComponent {
  users: IUser[] = mockUsers;
}
