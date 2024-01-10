import { Component } from '@angular/core';

@Component({
  selector: 'pl-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  name = 'Em';
  private age = 22;
  get displayAge(): string {
    if (this.age < 38) return this.age.toString();
    if (this.age === 42) return 'nice';
    if (this.age < 45) return 'having a midlife crisis';
    if (this.age === 69) return 'nice';
    return 'getting pretty darn old';
  }
  experienceAgeing() {
    this.age += 1;
  }
}
