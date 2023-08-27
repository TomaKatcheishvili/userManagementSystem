import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserLogsSidebarComponent } from './user-logs-sidebar/user-logs-sidebar.component';

@NgModule({
  declarations: [
    UserLogsSidebarComponent
  ],
  imports: [CommonModule, UserListRoutingModule],
})
export class UserListModule {}
