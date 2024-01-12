import { Injectable, signal } from '@angular/core';
import { User } from './user';
import { getUsr } from '../helper/mockdata/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users = signal<User[]>([]);

  constructor() {
    this.updateUsers();
  }

  private updateUsers() {
    this.users.set(getUsr());
  }

  deleteAtIndex(index: number){


    console.log((index));

    if(this.users()[index])
    {

      this.users.update(value => {
        value.splice(index,1)
        // debugger
        return [...value]
      })
    }
  }

}
