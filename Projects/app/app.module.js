"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./components/home.component");
var api_service_1 = require("./Service/api.service");
var user_component_1 = require("./components/users/user.component");
var user_edit_component_1 = require("./components/users/user-edit.component");
var project_component_1 = require("./components/projects/project.component");
var project_edit_component_1 = require("./components/projects/project-edit.component");
var task_component_1 = require("./components/tasks/task.component");
var task_edit_component_1 = require("./components/tasks/task-edit.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            user_component_1.UserComponent,
            user_edit_component_1.UserEditComponent,
            project_component_1.ProjectComponent,
            project_edit_component_1.ProjectEditComponent,
            task_component_1.TaskComponent,
            task_edit_component_1.TaskEditComponent
        ],
        providers: [api_service_1.ApiService, { provide: common_1.APP_BASE_HREF, useValue: '/' }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map