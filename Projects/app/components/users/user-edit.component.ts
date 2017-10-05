import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../shared/models';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../shared/global';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
    templateUrl: 'app/components/users/user-edit.component.html'

})

export class UserEditComponent implements OnInit {
    user: IUser;
    id: number;
    viewMode: boolean = true;
    msg: string;
    indLoading: boolean = false;
    userFrm: FormGroup;
    constructor(private fb: FormBuilder, private _apiService: ApiService, private route: ActivatedRoute, private router: Router ) { }

    ngOnInit(): void {
        this.userFrm = this.fb.group({
            Id: [''],
            Name: ['', Validators.required],
            UserName: ['', Validators.required],
            Password: ['', Validators.required],
        });
        this.id = +this.route.snapshot.params['id'];
        if (this.id) {
            this.LoadUser(this.id);
        };
        this.viewMode = this.route.snapshot.params['view'];
        if (this.viewMode) {
            this.userFrm.disable();
        };        
    }

    LoadUser(id: number): void {
        this.indLoading = true;
        this._apiService.getOne(Global.BASE_USERS_ENDPOINT, id)
            .subscribe(user => {
                this.user = user;
                this.indLoading = false;
                this.userFrm.setValue(this.user);
                },
                error => this.msg = <any>error);
    }

   
    onSubmit(formData: any) {
        if (this.id) {
            this._apiService.put(Global.BASE_USERS_ENDPOINT, formData._value.Id, formData._value).subscribe(
                data => {
                    this.msg = "Data successfully updated.";
                },
                error => {
                    this.msg = error;
                }
            );
        } else {
            console.log(this.userFrm.value);
            this._apiService.post(Global.BASE_USERS_ENDPOINT, formData._value).subscribe(
                data => {
                    this.msg = "Data successfully added.";
                },
                error => {
                    this.msg = error;
                }
            );  
        }
        this.router.navigate(['/users']);
     }
}