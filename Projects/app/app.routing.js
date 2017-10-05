"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var user_component_1 = require("./components/users/user.component");
var user_edit_component_1 = require("./components/users/user-edit.component");
var project_component_1 = require("./components/projects/project.component");
var project_edit_component_1 = require("./components/projects/project-edit.component");
var task_component_1 = require("./components/tasks/task.component");
var task_edit_component_1 = require("./components/tasks/task-edit.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'users', component: user_component_1.UserComponent },
    { path: 'users/new', component: user_edit_component_1.UserEditComponent },
    { path: 'users/:id/edit', component: user_edit_component_1.UserEditComponent },
    { path: 'users/:id/view/:view', component: user_edit_component_1.UserEditComponent },
    { path: 'projects', component: project_component_1.ProjectComponent },
    { path: 'projects/new', component: project_edit_component_1.ProjectEditComponent },
    { path: 'projects/:id/edit', component: project_edit_component_1.ProjectEditComponent },
    { path: 'projects/:id/view/:view', component: project_edit_component_1.ProjectEditComponent },
    { path: 'tasks', component: task_component_1.TaskComponent },
    { path: 'tasks/new', component: task_edit_component_1.TaskEditComponent },
    { path: 'tasks/:id/edit', component: task_edit_component_1.TaskEditComponent },
    { path: 'tasks/:id/view/:view', component: task_edit_component_1.TaskEditComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map