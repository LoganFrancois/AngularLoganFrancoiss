import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Projet} from "../../entities/projet.entities";
import {ProjetService} from "../services/projet.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projet: Projet|null=null;
  idprojet :number=0;

  constructor(private projetService: ProjetService, private router: Router){
  }

  ngOnInit(): void {}

  onSearch() {
    this.projet=null;
    this.projetService.getProjet(this.idprojet).subscribe(
      data => {this.projet=data},err =>{alert("Projet inexistant")});
  }

}
