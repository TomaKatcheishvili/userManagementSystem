import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import * as UserActions from '../+store/user.actions';
import { addUser } from '../+store/user.actions';
import { selectUsers } from '../+store/user.selectors';
import { IUser } from '../models/user-model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.addUserForm = this.fb.group({
      username: [
        '',
        [Validators.required],
        [this.uniqueUsernameValidator.bind(this)],
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emails: this.fb.array([
        this.fb.control(
          '',
          [Validators.required, Validators.email],
          [this.uniqueEmailsValidator.bind(this)]
        ),
      ]),
      phoneNumbers: this.fb.array([
        this.fb.control('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ]),
      isActive: [false],
    });

    this.store.dispatch(UserActions.loadUsers());
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.addUserForm.value);
    if (this.addUserForm.valid) {
      const newUser: IUser = this.addUserForm.value;
      newUser.logs = [{ date: new Date(), action: 'User created' }];
      this.store.dispatch(addUser({ user: newUser }));
      this.addUserForm.reset();
    }
  }

  get emails() {
    return this.addUserForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(
      this.fb.control(
        '',
        [Validators.required, Validators.email],
        [this.uniqueEmailsValidator.bind(this)]
      )
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

  uniqueEmailsValidator(control: AbstractControl) {
    const emailArray = control.value;

    return this.store.select(selectUsers).pipe(
      take(1),
      map((users) => {
        const isTaken = users.some((user) =>
          user.emails.some((r) => emailArray.indexOf(r) >= 0)
        );
        console.log(isTaken);
        return isTaken ? { uniqueEmails: true } : null;
      })
    );
  }

  uniqueUsernameValidator(usernameControl: AbstractControl) {
    return this.store.select(selectUsers).pipe(
      take(1),
      map((users) => {
        console.log(users);
        const isTaken = users.some(
          (user) => user.username === usernameControl.value
        );
        console.log(isTaken);
        return isTaken ? { uniqueUsername: true } : null;
      })
    );
  }

  logForm() {
    console.log(this.addUserForm);
  }
}
