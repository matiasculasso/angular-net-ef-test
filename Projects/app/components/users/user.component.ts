import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { FormBuilder } from '@angular/forms';
import { IUser } from '../../shared/models';
import { Global } from '../../shared/global';

@Component({
    templateUrl: 'app/components/users/user.component.html'
})

export class UserComponent implements OnInit {
    users: IUser[];    
    msg: string;
    indLoading: boolean = false;
    constructor(private fb: FormBuilder, private _apiService: ApiService) { }

    ngOnInit(): void {
        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._apiService.get(Global.BASE_USERS_ENDPOINT)
            .subscribe(users => { this.users = users; this.indLoading = false; },
                error => this.msg = <any>error);
    }
}