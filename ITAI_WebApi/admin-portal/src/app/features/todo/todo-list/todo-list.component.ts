import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { TodoItem } from '../../../../model/todoItem';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

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
  cdr = inject(ChangeDetectorRef);
  todoItemsSub!: Subscription;
  todoItems: TodoItem[] = [];
  isDrawerDisplay: boolean = false;
  newTodoItem: TodoItem | undefined;

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.todoItemsSub?.unsubscribe();

    this.todoItemsSub = this.todoService.getTodoItems().subscribe((items) => {
      this.todoItems = items;
      this.cdr.detectChanges();
    });
  }

  openCreateTodoItemnDrawer() {
    this.newTodoItem = { name: '', isComplete: false };
    this.isDrawerDisplay = true;
  }

  closeCreateApplicationDrawer() {
    this.newTodoItem = { name: '', isComplete: false };
    this.fetchItems();
    this.isDrawerDisplay = false;
  }

  createTodoItem() {
    this.todoService.createTodoItem(this.newTodoItem!).subscribe(() => {
      this.closeCreateApplicationDrawer();
    });
  }

  onContentChange(e: Event) {
    this.newTodoItem!.name =
      (e.target && (e.target as HTMLInputElement).value) || '';
  }
}
