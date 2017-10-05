"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("../../Service/api.service");
var forms_1 = require("@angular/forms");
var global_1 = require("../../shared/global");
var TaskComponent = (function () {
    function TaskComponent(fb, _apiService) {
        this.fb = fb;
        this._apiService = _apiService;
        this.indLoading = false;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.LoadTasks();
    };
    TaskComponent.prototype.LoadTasks = function () {
        var _this = this;
        this.indLoading = true;
        this._apiService.get(global_1.Global.BASE_TASKS_ENDPOINT)
            .subscribe(function (data) {
            _this.tasks = data;
            _this.indLoading = false;
        }, function (error) { return _this.msg = error; });
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/tasks/task.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, api_service_1.ApiService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map