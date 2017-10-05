import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../shared/models';
import { Global } from '../../shared/global';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({    
    templateUrl: 'app/components/tasks/task-edit.component.html'
})

export class TaskEditComponent implements OnInit {
    task: ITask;
    id: number;
    viewMode: boolean = true;
    msg: string;
    indLoading: boolean = false;
    taskFrm: FormGroup;
    constructor(private fb: FormBuilder, private _apiService: ApiService, private route: ActivatedRoute, private router: Router ) { }

    ngOnInit(): void {
        this.taskFrm = this.fb.group({
            Id: [''],
            Title: ['', Validators.required],
            Description: ['', Validators.required],
            StartDate: ['', Validators.required],
            Creator: [''],
            AssignedUser: [''],
            EndDate: [''],
            Comments: [''],
            Status: [''],

        });
        this.id = +this.route.snapshot.params['id'];
        if (this.id) {
            this.LoadTask(this.id);
        };
        this.viewMode = this.route.snapshot.params['view'];
        if (this.viewMode) {
            this.taskFrm.disable();
        };  
    }

    LoadTask(id: number): void {
        this.indLoading = true;
        this._apiService.getOne(Global.BASE_TASKS_ENDPOINT, id)
            .subscribe(task => {
                this.task = task;
                this.indLoading = false;
                this.taskFrm.setValue(this.task);
                },
                error => this.msg = <any>error);
    }

   
    onSubmit(formData: any) {
        if (this.id) {
            this._apiService.put(Global.BASE_TASKS_ENDPOINT, formData._value.Id, formData._value).subscribe(
                data => {
                    this.msg = "Data successfully updated.";
                },
                error => {
                    this.msg = error;
                }
            );
        } else {
            this._apiService.post(Global.BASE_TASKS_ENDPOINT, formData._value).subscribe(
                data => {
                    this.msg = "Data successfully added.";
                },
                error => {
                    this.msg = error;
                }
            );  
        }
        this.router.navigate(['/tasks']);
     }
}