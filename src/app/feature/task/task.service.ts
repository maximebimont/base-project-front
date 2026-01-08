import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly baseUrl = 'http://localhost:8080/api/tasks';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  // etc: update, delete
}
