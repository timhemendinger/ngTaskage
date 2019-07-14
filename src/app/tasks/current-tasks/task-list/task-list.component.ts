
import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../../../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  tasks = this.tasksService.tasks;

  @ViewChild('tasksCheckList', {static: false}) tasksCheckList;

  test() {
    console.log(this.tasksCheckList)
  }

  ngOnInit() {
     
  }

}