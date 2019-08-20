import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()

export class TasksService {
  tasks = [];

  constructor(private http: HttpClient) { }

  completedTasks = [];

  addTask(name: string, description: string) {
    this.tasks.push({name: name, description: description});
    
    this.http.post('https://ng-complete-guide-7a9e7.firebaseio.com/tasks.json', { name: name, description: description }).subscribe();

  }

  fetchTasks() {
    this.http.get
      ('https://ng-complete-guide-7a9e7.firebaseio.com/tasks.json')
      .subscribe(posts => {
        console.log(posts);
      });
  }

  removeTask(id) {
    var completed = this.tasks.splice(id, 1);
    this.completedTasks.push(completed[0]);
  }

}