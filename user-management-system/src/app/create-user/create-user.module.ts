import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user.routing';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, CreateUserRoutingModule, ReactiveFormsModule],
})
export class CreateUserModule {}
