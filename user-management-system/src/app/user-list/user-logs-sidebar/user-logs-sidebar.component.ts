import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user-model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-logs-sidebar',
  templateUrl: './user-logs-sidebar.component.html',
  styleUrls: ['./user-logs-sidebar.component.css'],
})
export class UserLogsSidebarComponent {
  users!: IUser[];

  constructor(private userService: UserServiceService) {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
}
