import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../User.service';

@Component({
  selector: 'pl-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userList = this.userService.users();
  selectedUser?: User;

  updateSelectedUser($event: User) {
    this.selectedUser = $event;
  }
  removeUser(index: number) {
    this.userService.deleteAtIndex(index)
    // if (this.userList.length >= 1) this.userList.splice(index, 1);
  }
  constructor(readonly userService: UserService) {}
}
