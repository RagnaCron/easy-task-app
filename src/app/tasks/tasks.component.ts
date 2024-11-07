import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {TaskComponent} from '../task/task.component';
import {dummyTasks} from '../dummy-tasks';
import {UserModel} from '../user/user.model';
import {AddtaskComponent} from '../addtask/addtask.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    AddtaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user?: UserModel;
  isAddingTask = false;
  tasks = dummyTasks;

  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
