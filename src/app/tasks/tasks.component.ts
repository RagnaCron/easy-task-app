import {Component, Input, input} from '@angular/core';
import {TaskComponent} from '../task/task.component';
import {dummyTasks} from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user?: {
    id: string,
    avatar: string,
    name: string,
  };

  tasks = dummyTasks;

  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

}
