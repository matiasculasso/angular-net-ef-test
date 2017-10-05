import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { FormBuilder } from '@angular/forms';
import { IProject } from '../../shared/models';
import { Global } from '../../shared/global';

@Component({
    templateUrl: 'app/components/projects/project.component.html'
})

export class ProjectComponent implements OnInit {
    projects: IProject[];    
    msg: string;
    indLoading: boolean = false;
    constructor(private fb: FormBuilder, private _apiService: ApiService) { }

    ngOnInit(): void {
        this.LoadProjects();
    }

    LoadProjects(): void {
        this.indLoading = true;
        this._apiService.get(Global.BASE_PROJECTS_ENDPOINT)
            .subscribe(data => {
                this.projects = data;
                this.indLoading = false;
                },
                error => this.msg = <any>error);
    }
}