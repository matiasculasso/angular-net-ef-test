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
var UserComponent = (function () {
    function UserComponent(fb, _apiService) {
        this.fb = fb;
        this._apiService = _apiService;
        this.indLoading = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
    };
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._apiService.get(global_1.Global.BASE_USERS_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/users/user.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, api_service_1.ApiService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map