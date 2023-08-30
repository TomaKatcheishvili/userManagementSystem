import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subject, take, takeUntil } from 'rxjs';
import * as UserActions from '../+store/user.actions';
import { selectUsers } from '../+store/user.selectors';
import { IUser } from '../models/user-model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  addUserForm: FormGroup;
  isEdit = false;
  userId!: number;

  destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {
    this.addUserForm = this.fb.group({
      username: ['', [Validators.required]],
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

    this.store.dispatch(UserActions.loadUsers());

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.userId = params['userId'];

      if (this.userId) {
        this.isEdit = true;
        this.userService
          .getUserById(this.userId)
          .pipe(takeUntil(this.destroy$))
          .subscribe((user) => {
            if (user) {
              console.log(user);
              this.populateForm(user);
            }
          });
      }
    });

    this.addCustomValidators();
  }

  ngOnInit() {}

  onSubmit() {
    if (this.isEdit) {
      if (this.addUserForm.valid) {
        const editedUser: IUser = {
          ...this.addUserForm.value,
          userId: this.userId,
        };
        this.store.dispatch(
          UserActions.editUser({
            user: editedUser,
            userId: this.userId,
          })
        );
      }
      this.addUserForm.reset();
    } else {
      if (this.addUserForm.valid) {
        const newUser: IUser = this.addUserForm.value;
        newUser.logs = [{ date: new Date(), action: 'User created' }];
        this.store.dispatch(UserActions.addUser({ user: newUser }));
        this.addUserForm.reset();
      }
    }
  }

  get emails() {
    return this.addUserForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(
      this.fb.control('', [Validators.required, Validators.email])
    );

    this.addCustomValidators();
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

  populateForm(user: IUser) {
    this.addUserForm.patchValue({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
    });

    while (this.emails.length > 1) {
      this.emails.removeAt(1);
    }

    for (let i = 1; i < user.emails.length; i++) {
      this.addEmail();
    }

    for (let i = 0; i < user.emails.length; i++) {
      this.emails.controls[i].setValue(user.emails[i]);
    }

    while (this.phoneNumbers.length > 1) {
      this.phoneNumbers.removeAt(1);
    }

    for (let i = 1; i < user.phoneNumbers.length; i++) {
      this.addPhoneNumber();
    }

    for (let i = 0; i < user.phoneNumbers.length; i++) {
      this.phoneNumbers.controls[i].setValue(user.phoneNumbers[i]);
    }
  }

  addCustomValidators() {
    if (!this.isEdit) {
      this.addUserForm.controls['username'].setAsyncValidators(
        this.uniqueUsernameValidator.bind(this)
      );
      const emailControls = this.addUserForm.get('emails') as FormArray;
      emailControls.controls.forEach((control) => {
        control.setAsyncValidators(this.uniqueEmailsValidator.bind(this));
      });
      emailControls.updateValueAndValidity();
    }

    this.addUserForm.controls['username'].updateValueAndValidity();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
