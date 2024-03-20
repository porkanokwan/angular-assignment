import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: string[] = [];
  newTodo: string = '';

  todoForm: FormGroup;

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todo: new FormControl('', [Validators.max(100), Validators.required]),
    });
  }

  // onChageInput(event: Event) {
  //   this.newTodo = (<HTMLInputElement>event.target).value;
  // }

  onAddTodo() {
    if (this.todoList.length === 10) {
      alert('You can add 10 todo list!!!');
    } else {
      this.todoList.push(this.newTodo);
      this.newTodo = '';
    }
  }

  onDeleteTodo(i: number) {
    this.todoList.splice(i, 1);
  }
}
