import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})

export class CompletedTasksComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

}