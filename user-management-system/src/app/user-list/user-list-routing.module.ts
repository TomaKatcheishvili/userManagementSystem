import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserListComponent } from './user-list.component';
import { UserLogsSidebarComponent } from './user-logs-sidebar/user-logs-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: '',
        outlet: 'sidebar',
        component: UserLogsSidebarComponent,
      },
    ],
  },
  { path: 'create-user', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
