import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListRoutingModule } from './user-list-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [CommonModule, UserListRoutingModule],
})
export class UserListModule {}
