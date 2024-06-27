import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../../model/todoItem';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService extends BaseService {
  private http = inject(HttpClient);
  private readonly path = '/api/TodoItems';
  getTodoItems(): Observable<TodoItem[]> {
    const url = `${this.endpoint}${this.path}`;
    return this.http.get<TodoItem[]>(url);
  }
  createTodoItem(item: TodoItem): Observable<void> {
    const url = `${this.endpoint}${this.path}`;
    return this.http.post<void>(url, item);
  }

  updateTodoItem(item: TodoItem): Observable<void> {
    const url = `${this.endpoint}${this.path}/${item.id}`;
    return this.http.put<void>(url, item);
  }

  deleteTodoItem(item: TodoItem): Observable<void> {
    const url = `${this.endpoint}${this.path}/${item.id}`;
    return this.http.delete<void>(url);
  }
}
