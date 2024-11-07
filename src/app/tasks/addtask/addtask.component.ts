import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskInput, TaskModel} from '../task/task.model';

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
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskInput>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
