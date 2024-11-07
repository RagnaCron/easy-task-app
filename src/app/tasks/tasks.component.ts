import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {UserModel} from '../user/user.model';
import {AddtaskComponent} from './addtask/addtask.component';
import {TasksService} from './tasks.service';

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

  constructor(private taskService: TasksService) {}

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.user!.id);
  }

  onTaskComplete(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
