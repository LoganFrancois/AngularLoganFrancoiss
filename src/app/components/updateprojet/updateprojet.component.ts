import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Projet} from "../../entities/projet.entities";
import {ProjetService} from "../services/projet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-updateprojet',
  templateUrl: './updateprojet.component.html',
  styleUrls: ['./updateprojet.component.css']
})
export class UpdateprojetComponent implements OnInit {

  projetFormGroup?: FormGroup;
  submitted=false;
  @Input() projet?: Projet;
  deleted=false;

  constructor(private projetService: ProjetService, private fb: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      idprojet: [this.projet?.idprojet],
      nomproj:[this.projet?.nomproj, Validators.required],
      datedebut: [this.projet?.datedebut, Validators.required],
      datefin: [this.projet?.datefin, Validators.required],
      cout: [this.projet?.cout, Validators.required],
     // idresponsable: [this.projet?.responsable.idemploye, Validators.required]


    });
  }
  onUpdateProjet(): void {
    this.submitted = true;
    if (this.projetFormGroup?.invalid) {
      return;
    }
    // Si la valeur du champ est vide, on conserve la valeur actuelle
   // if (this.projetFormGroup?.controls['idresponsable'].value === '') {
    //  this.projetFormGroup?.controls['idresponsable'].setValue(this.projet?.cout);
   // }
    this.projetService.updateProjet(this.projetFormGroup?.value).subscribe(
      data => {alert('Mise à jour réussie')},
      err => {alert(err.headers.get("error"));});
  }
  onDeleteProjet() {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.projetService.deleteProjet(this.projetFormGroup?.value).subscribe(
        data => {
          alert('Projet effacé!');
          this.deleted=true;},
        err => {alert(err.headers.get("error"));
        });
    }
  }

}
