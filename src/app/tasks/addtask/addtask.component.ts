import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskInput, TaskModel} from '../task/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Input({required: false}) userId!: string;
  @Input({required: false}) isAddingTask = false;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    },
      this.userId);
    this.close.emit();
  }
}
