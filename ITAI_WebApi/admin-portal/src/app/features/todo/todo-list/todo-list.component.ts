import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { TodoItem } from '../../../../model/todoItem';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems$: Observable<TodoItem[]> = this.todoService.getTodoItems();
  isDrawerDisplay: boolean = false;
  newTodoItem: TodoItem | undefined;

  ngOnInit() {}

  openCreateTodoItemnDrawer() {
    this.newTodoItem = { name: '', isComplete: 0 };
    this.isDrawerDisplay = true;
  }

  createTodoItem() {
    this.todoService.createTodoItem(this.newTodoItem!).subscribe(() => {
      this.isDrawerDisplay = false;
    });
  }

  closeCreateApplicationDrawer() {
    this.newTodoItem = { name: '', isComplete: 0 };
    this.isDrawerDisplay = false;
  }

  onContentChange(e: Event) {
    this.newTodoItem!.name =
      (e.target && (e.target as HTMLInputElement).value) || '';
  }
}
