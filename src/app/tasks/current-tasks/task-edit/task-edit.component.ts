import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  } 

  newTaskTitle: string = '';

  onNewTaskAdded() {
    this.tasksService.addTask(this.newTaskTitle, 'test');
    this.newTaskTitle = '';
  }

}