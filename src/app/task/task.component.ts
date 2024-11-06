import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: {
    summary: string;
    dueDate: string;
    id: string;
    title: string;
    userId: string
  };

}
