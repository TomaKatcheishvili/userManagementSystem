import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserResolver } from '../resolvers/create-user.reslover';
import { UserListComponent } from './user-list.component';
import { UserLogsSidebarComponent } from './user-logs-sidebar/user-logs-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    children: [
      {
        path: '',
        outlet: 'sidebar',
        component: UserLogsSidebarComponent,
      },
    ],
  },
  {
    path: 'create-user',
    loadChildren: () =>
      import('../create-user/create-user.module').then(
        (m) => m.CreateUserModule
      ),
    resolve: {
      userData: CreateUserResolver,
    },
  },
  {
    path: 'edit-user/:userId',
    loadChildren: () =>
      import('../create-user/create-user.module').then(
        (m) => m.CreateUserModule
      ),
    resolve: {
      userData: CreateUserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {}
