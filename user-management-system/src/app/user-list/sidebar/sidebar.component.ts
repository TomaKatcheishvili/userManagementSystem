import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user-model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  user!: IUser;
}
