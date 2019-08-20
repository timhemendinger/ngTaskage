import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { TasksService } from './tasks.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/current']);
    this.tasksService.fetchTasks();
  }

}