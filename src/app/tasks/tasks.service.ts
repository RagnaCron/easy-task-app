import {dummyTasks} from '../dummy-tasks';
import {TaskInput} from './task/task.model';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root'})
export class TasksService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: TaskInput, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
