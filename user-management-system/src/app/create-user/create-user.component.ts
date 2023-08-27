import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mockUsers } from '../mock-data/users-mock-data';
import { IUser } from '../models/user-model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {
    this.addUserForm = this.fb.group({
      username: [
        '',
        [Validators.required, this.uniqueUsernameValidator.bind(this)],
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.email]),
      ]),
      phoneNumbers: this.fb.array([
        this.fb.control('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ]),
      isActive: [false],
    });
  }

  ngOnInit() {}

  uniqueUsernameValidator(control: any) {
    const username = control.value.toLowerCase();
    const isUsernameTaken = mockUsers.some(
      (user) => user.username.toLowerCase() === username
    );
    return isUsernameTaken ? { uniqueUsername: true } : null;
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const newUser: IUser = this.addUserForm.value;
      console.log(newUser);
      this.userService.addUser(newUser).subscribe((addedUser) => {
        console.log('New User Added:', addedUser);
        // // Optionally, you can reset the form after adding
        // this.addUserForm.reset();
      });
    }
  }

  get emails() {
    return this.addUserForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(
      this.fb.control('', [Validators.required, Validators.email])
    );
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  get phoneNumbers() {
    return this.addUserForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.fb.control('', [Validators.required, Validators.pattern('^[0-9]*$')])
    );
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }
}
