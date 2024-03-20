import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  isChange: boolean = false;

  @Input() todo: string = '';
  @Input() index: number;

  @Output() deleteTodo = new EventEmitter<number>();

  onDelete() {
    this.deleteTodo.emit(this.index);
  }

  onClickChange() {
    this.isChange = !this.isChange;
  }
}
