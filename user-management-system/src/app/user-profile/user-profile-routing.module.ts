import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserProfileResolver } from '../resolvers/user-profile.reslover';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    // resolve: {
    //   user: UserProfileResolver,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
