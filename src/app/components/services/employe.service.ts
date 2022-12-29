import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';
import {Employe} from "../../entities/employe.entities";

@Injectable({providedIn:"root"})  //providedIn:"root" permet de rendre accessible cette classe partout dans l'application
export class EmployeService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }

  getEmploye(idemploye: number): Observable<Employe>{
    return this.http.get<Employe>(this.host + '/employes/' + idemploye);
  }

  searchUniqueEmploye(matricule: string): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host + '/employes/' + matricule);
  }

  searchEmployeByNom(nom: string): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.host + '/employes/nom=' + nom);
  }

  deleteEmploye(employe: Employe): Observable<void>{
    return this.http.delete<void>(this.host + '/employes/' + employe.idemploye);
  }
  save(employe: Employe): Observable<Employe>{
    return this.http.post<Employe>(this.host + '/employes/', employe);
  }

  updateEmploye(employe: Employe): Observable<Employe>{
    alert("Employé = " + employe.nom);
    return this.http.put<Employe>(this.host + '/employes/' + employe.idemploye, employe);
  }
}
