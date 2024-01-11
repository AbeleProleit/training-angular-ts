import { Component } from '@angular/core';
import { getUsr } from '../../helper/mockdata/users';

@Component({
  selector: 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userList = getUsr();
}
