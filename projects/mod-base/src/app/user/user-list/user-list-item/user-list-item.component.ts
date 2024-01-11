import { Component, Input } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'pl-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.scss'
})
export class UserListItemComponent {
  @Input({required: true}) userData!: User;
}
