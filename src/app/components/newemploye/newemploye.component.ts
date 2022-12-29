import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeService} from "../services/employe.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrls: ['./newemploye.component.css']
})
export class NewemployeComponent implements OnInit {
  employeFormGroup?: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private employeService: EmployeService, private router: Router) {
  }

  ngOnInit() : void {
    this.employeFormGroup = this.fb.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      matricule : ['', Validators.required],
      tel: ['+32', Validators.required],
      mail: ['', Validators.required]
    });
  }

  onSaveEmploye(): void {
    this.submitted = true;
    if (this.employeFormGroup?.invalid) { return; }
    this.employeService.save(this.employeFormGroup?.value).subscribe(data => alert('Employé enregistré!'), err => {
        alert(err.headers.get("error"));
      });
    this.router.navigateByUrl('employes');
  }
}

