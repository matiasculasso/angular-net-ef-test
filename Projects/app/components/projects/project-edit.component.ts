import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProject } from '../../shared/models';
import { Global } from '../../shared/global';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({    
    templateUrl: 'app/components/projects/project-edit.component.html'
})

export class ProjectEditComponent implements OnInit {
    project: IProject;
    id: number;
    viewMode: boolean = true;
    msg: string;
    indLoading: boolean = false;
    projectFrm: FormGroup;
    constructor(private fb: FormBuilder, private _apiService: ApiService, private route: ActivatedRoute, private router: Router ) { }

    ngOnInit(): void {
        this.projectFrm = this.fb.group({
            Id: [''],
            Name: ['', Validators.required],
            Description: ['', Validators.required],
            StartDate: ['', Validators.required],
            EndDate: [''],
            Tasks: [''],
            Users: [''],

        });
        this.id = +this.route.snapshot.params['id'];
        if (this.id) {
            this.LoadProject(this.id);
        };
        this.viewMode = this.route.snapshot.params['view'];
        if (this.viewMode) {
            this.projectFrm.disable();
        };  
    }

    LoadProject(id: number): void {
        this.indLoading = true;
        this._apiService.getOne(Global.BASE_PROJECTS_ENDPOINT, id)
            .subscribe(project => {
                this.project = project;
                this.indLoading = false;
                this.projectFrm.setValue(this.project);
                },
                error => this.msg = <any>error);
    }

   
    onSubmit(formData: any) {
        if (this.id) {
            this._apiService.put(Global.BASE_PROJECTS_ENDPOINT, formData._value.Id, formData._value).subscribe(
                data => {
                    this.msg = "Data successfully updated.";
                },
                error => {
                    this.msg = error;
                }
            );
        } else {
            this._apiService.post(Global.BASE_PROJECTS_ENDPOINT, formData._value).subscribe(
                data => {
                    this.msg = "Data successfully added.";
                },
                error => {
                    this.msg = error;
                }
            );  
        }
        this.router.navigate(['/projects']);
     }
}