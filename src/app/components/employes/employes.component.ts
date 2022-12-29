import { Component, OnInit } from '@angular/core';
import {Employe} from "../../entities/employe.entities";
import {EmployeService} from "../services/employe.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  emp:Employe|null=null;
  employes?: Employe[];

  constructor(private employeService: EmployeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onEdit(employe: Employe){
    this.router.navigateByUrl('updateemploye/' + employe.idemploye);
  }


  onSearch(value: any) {
    this.employeService.searchEmployeByNom(value.nom).subscribe(data => {this.employes = data});
  }

  onNewEmploye() {
    this.router.navigateByUrl('newEmploye');
  }

  onDelete(employe: Employe) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.employeService.deleteEmploye(employe).subscribe(
        data => {this.onSearch(employe);
        },
        err => {
          alert(err.headers.get("error"));
        }
      );
    }

  }
}
