import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { FormBuilder } from '@angular/forms';
import { ITask } from '../../shared/models';
import { Global } from '../../shared/global';

@Component({
    templateUrl: 'app/components/tasks/task.component.html'
})

export class TaskComponent implements OnInit {
    tasks: ITask[];    
    msg: string;
    indLoading: boolean = false;
    constructor(private fb: FormBuilder, private _apiService: ApiService) { }

    ngOnInit(): void {
        this.LoadTasks();
    }

    LoadTasks(): void {
        this.indLoading = true;
        this._apiService.get(Global.BASE_TASKS_ENDPOINT)
            .subscribe(data => {
                this.tasks = data;
                this.indLoading = false;
                },
                error => this.msg = <any>error);
    }
}