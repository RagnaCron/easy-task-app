import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  //@Output() select = new EventEmitter();
  select = output<string>()

  //get imagePath() {
  //  return `assets/users/${this.avatar()}`;
  //}
  imagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  })

  onSelectUser() {
    this.select.emit(this.id());
    this.select.emit(this.avatar());
    this.select.emit(this.name());
  }
}
