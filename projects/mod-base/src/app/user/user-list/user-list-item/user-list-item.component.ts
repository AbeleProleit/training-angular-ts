import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.scss',
})
export class UserListItemComponent {
  @Input({ required: true }) userData!: User;
  @Output() selectedUser = new EventEmitter<User>();

  @HostListener('click')
  triggerOutput() {
    this.selectedUser.emit(this.userData);
  }
}
