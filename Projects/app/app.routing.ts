import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/users/user.component';
import { UserEditComponent } from './components/users/user-edit.component';
import { ProjectComponent } from './components/projects/project.component';
import { ProjectEditComponent } from './components/projects/project-edit.component';
import { TaskComponent } from './components/tasks/task.component';
import { TaskEditComponent } from './components/tasks/task-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'users/new', component: UserEditComponent },
    { path: 'users/:id/edit', component: UserEditComponent },
    { path: 'users/:id/view/:view', component: UserEditComponent },   
    { path: 'projects', component: ProjectComponent },
    { path: 'projects/new', component: ProjectEditComponent },
    { path: 'projects/:id/edit', component: ProjectEditComponent },
    { path: 'projects/:id/view/:view', component: ProjectEditComponent },    
    { path: 'tasks', component: TaskComponent },
    { path: 'tasks/new', component: TaskEditComponent },
    { path: 'tasks/:id/edit', component: TaskEditComponent },
    { path: 'tasks/:id/view/:view', component: TaskEditComponent },    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);