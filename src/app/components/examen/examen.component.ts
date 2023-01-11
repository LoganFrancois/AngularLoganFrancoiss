import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Employe} from "../../entities/employe.entities";
import {EmployeService} from "../services/employe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjetService} from "../services/projet.service";
import {Projet} from "../../entities/projet.entities";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  projet: Projet|null=null;
  projets?: Projet[];



  constructor(private projetService: ProjetService,private employeService: EmployeService, private router: Router, private fb: FormBuilder, private activatedRoute : ActivatedRoute) {

  }


  ngOnInit(): void {

  }

  onSearchbyTitle(value:any) {
    this.projet=null;
    this.projetService.getProjetsByNom(value.nomproj).subscribe(
      data => {this.projets=data},err =>{alert("Aucun projet trouvé")});
  }


  onSearchByCout (value:any){
    this.projet=null;
    this.projetService.getProjetByCout(value.cout).subscribe(
      data => {this.projets=data}, err =>{alert("Pas de projet qui coutent plus cher")});
  }




}
