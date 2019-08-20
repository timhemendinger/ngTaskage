import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { TaskEditComponent } from './tasks/current-tasks/task-edit/task-edit.component';
import { TaskListComponent } from './tasks/current-tasks/task-list/task-list.component';
import { TasksService } from './tasks.service';
import  { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrentTasksComponent } from './tasks/current-tasks/current-tasks.component';
import { CompletedTasksComponent } from './tasks/completed-tasks/completed-tasks.component';
import { StatsComponent } from './tasks/stats/stats.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { HttpClientModule } from '@angular/common/http';

const AppRoutes: Routes = [
  { path: 'current', component: CurrentTasksComponent },
  { path: 'completed', component: CompletedTasksComponent }
]

@NgModule({
  imports: [FormsModule, BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatListModule, MatTabsModule, MatToolbarModule, RouterModule.forRoot(AppRoutes), HttpClientModule ],
  declarations: [ AppComponent, TaskEditComponent, TaskListComponent, CurrentTasksComponent, CompletedTasksComponent, StatsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TasksService]
})

export class AppModule { }