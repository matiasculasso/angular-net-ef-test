import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home.component';
import { ApiService } from './Service/api.service'
import { UserComponent } from './components/users/user.component';
import { UserEditComponent } from './components/users/user-edit.component';
import { ProjectComponent } from './components/projects/project.component';
import { ProjectEditComponent } from './components/projects/project-edit.component';
import { TaskComponent } from './components/tasks/task.component';
import { TaskEditComponent } from './components/tasks/task-edit.component';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
        UserEditComponent,
        ProjectComponent,
        ProjectEditComponent,
        TaskComponent,
        TaskEditComponent],
    providers: [ApiService, { provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})

export class AppModule { }