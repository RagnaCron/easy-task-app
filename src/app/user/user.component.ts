import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: UserModel;
  @Input({required: true}) selected: boolean = false;

  select = output<string>()

  imagePath = computed(() => {
    return `assets/users/${this.user.avatar}`;
  })

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
