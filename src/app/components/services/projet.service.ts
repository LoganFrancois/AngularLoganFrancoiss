import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';
import {Employe} from "../../entities/employe.entities";
import {Projet} from "../../entities/projet.entities";


@Injectable({providedIn:"root"})
export class ProjetService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }

  deleteProjet(projet: Projet): Observable<void>{
    return this.http.delete<void>(this.host + '/projet/' + projet.idprojet);
  }
  save(projet: Projet, employe: Employe): Observable<Projet>{
    alert("Date du début de projet:  = " + projet.datedebut + "Date de fin de projet:  = " + projet.datefin +" Employé responsable: = " + employe.idemploye + " " + employe.nom );
    projet.employe = employe;
    return this.http.post<Projet>(this.host + '/projet/', projet);
  }

  getProjet(idprojet: number): Observable<Projet>{
    return this.http.get<Projet>(this.host + '/projet/' + idprojet);
  }

  updateProjet(projet: Projet): Observable<Projet>{
    return this.http.put<Projet>(this.host + '/projet/' + projet.idprojet, projet);
  }
  getProjetEmploye(idemploye: number) : Observable<Projet[]> {
    return this.http.get<Projet[]>(this.host + '/projet/idemploye=' + idemploye);
  }


}
