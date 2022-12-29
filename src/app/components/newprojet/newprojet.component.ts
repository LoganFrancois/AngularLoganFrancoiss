import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatDate} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Projet} from "../../entities/projet.entities";
import {ProjetService} from "../services/projet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-newprojet',
  templateUrl: './newprojet.component.html',
  styleUrls: ['./newprojet.component.css']
})
export class NewprojetComponent implements OnInit {
  @Input() empAct?: FormGroup;
  @Output() newProjet = new EventEmitter<Projet>();
  projetFormGroup?: FormGroup;
  submitted = false;
  projet?: Projet;
  idemploye: number;

  constructor(private fb: FormBuilder, private projetService: ProjetService, private activatedRoute: ActivatedRoute) {
    this.idemploye = parseInt(this.activatedRoute.snapshot.params['idemploye'], 10);
  }

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      nomproj: ['', Validators.required],
      datedebut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      datefin: [formatDate(new Date(), '2023-12-31', 'en')],
      cout: ['', Validators.required],
      idemploye:['',Validators.required]

    });
  }

  onSaveProjet(): void {
    this.submitted = true;
    this.projetService.save(this.projetFormGroup?.value, this.empAct?.value).subscribe(
      data => {
        alert('Enregistrement du projet: ' + data.idprojet + ' pour le responsable: ' + data.employe.nom + ' ' + data.employe.prenom);
        this.projet = data;
        this.newProjet.emit(data)
      },
      err => {
        alert(err.headers.get("error"));
      });
  }
}


