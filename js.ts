import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: string[] = [];
  newTodoText: string = '';

  addTodoItem() {
    if (this.newTodoText.trim()) {
      this.todoList.push(this.newTodoText);
      this.newTodoText = '';
    }
  }

  removeTodoItem(index: number) {
    this.todoList.splice(index, 1);
  }
}
