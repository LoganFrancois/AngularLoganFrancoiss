import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EmployeService} from "../services/employe.service";
import {Projet} from "../../entities/projet.entities";
import {ProjetService} from "../services/projet.service";

@Component({
  selector: 'app-updateemploye',
  templateUrl: './updateemploye.component.html',
  styleUrls: ['./updateemploye.component.css']
})
export class UpdateemployeComponent implements OnInit {

  employeFormGroup?: FormGroup;
  submitted = false;
  idemploye: number;
  a: number;
  projets? : Projet[];

  constructor(private employeService: EmployeService, private projetService : ProjetService, private fb: FormBuilder, private activatedRoute : ActivatedRoute) {
    this.idemploye = parseInt(this.activatedRoute.snapshot.params['idemploye'], 10);
    this.a=this.idemploye;


  }

  ngOnInit(): void {
    this.employeService.getEmploye(this.idemploye).subscribe(
      employe =>{this.employeFormGroup = this.fb.group({
        idemploye: [employe.idemploye, Validators.required],
        nom: [employe.nom, Validators.required],
        prenom: [employe.prenom, Validators.required],
        matricule: [employe.matricule, Validators.required],
        tel: [employe.tel, Validators.required],
        mail: [employe.mail, Validators.required]
      })
      });
  }

  onUpdateEmploye(): void {
    this.submitted = true;
    if (this.employeFormGroup?.invalid) { return; }

    this.employeService.updateEmploye(this.employeFormGroup?.value).subscribe(data => {alert('Mise à jour effectuée')},
      err => {alert(err.headers.get("error"));});
  }

  onSeeProjet() {


    this.projetService.getProjetEmploye(this.a).subscribe(
      data => {this.projets=data},
      err => {alert(err.headers.get("error"));}
    );
  }

  onAddProjet(projet:Projet) {
    this.projets?.push(projet);
  }
}
