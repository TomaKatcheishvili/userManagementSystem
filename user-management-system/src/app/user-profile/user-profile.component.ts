import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IUser } from '../models/user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit {
  @Input() selectedUser!: IUser | undefined;

  // constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((params) => {
    //   const username = params.get('firstName');
    //   if (username) {
    //     this.selectedUser = mockUsers.find(
    //       (user) => user.firstName === username
    //     );
    //   }
    // });
  }
}
