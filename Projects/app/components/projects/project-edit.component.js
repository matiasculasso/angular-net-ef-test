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
var router_1 = require("@angular/router");
var ProjectEditComponent = (function () {
    function ProjectEditComponent(fb, _apiService, route, router) {
        this.fb = fb;
        this._apiService = _apiService;
        this.route = route;
        this.router = router;
        this.viewMode = true;
        this.indLoading = false;
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        this.projectFrm = this.fb.group({
            Id: [''],
            Name: ['', forms_1.Validators.required],
            Description: ['', forms_1.Validators.required],
            StartDate: ['', forms_1.Validators.required],
            EndDate: [''],
            Tasks: [''],
            Users: [''],
        });
        this.id = +this.route.snapshot.params['id'];
        if (this.id) {
            this.LoadProject(this.id);
        }
        ;
        this.viewMode = this.route.snapshot.params['view'];
        if (this.viewMode) {
            this.projectFrm.disable();
        }
        ;
    };
    ProjectEditComponent.prototype.LoadProject = function (id) {
        var _this = this;
        this.indLoading = true;
        this._apiService.getOne(global_1.Global.BASE_PROJECTS_ENDPOINT, id)
            .subscribe(function (project) {
            _this.project = project;
            _this.indLoading = false;
            _this.projectFrm.setValue(_this.project);
        }, function (error) { return _this.msg = error; });
    };
    ProjectEditComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (this.id) {
            this._apiService.put(global_1.Global.BASE_PROJECTS_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                _this.msg = "Data successfully updated.";
            }, function (error) {
                _this.msg = error;
            });
        }
        else {
            this._apiService.post(global_1.Global.BASE_PROJECTS_ENDPOINT, formData._value).subscribe(function (data) {
                _this.msg = "Data successfully added.";
            }, function (error) {
                _this.msg = error;
            });
        }
        this.router.navigate(['/projects']);
    };
    return ProjectEditComponent;
}());
ProjectEditComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/projects/project-edit.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, api_service_1.ApiService, router_1.ActivatedRoute, router_1.Router])
], ProjectEditComponent);
exports.ProjectEditComponent = ProjectEditComponent;
//# sourceMappingURL=project-edit.component.js.map