import {Component, output} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-user';
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-task-app';
  users = DUMMY_USERS;

  isUserSelected = false;
  name: string = '';

  onSelectUser(id: string) {
    this.isUserSelected = true;
    // @ts-ignore
    this.name = this.users.find(user => user.id === id).name;
  }
}
