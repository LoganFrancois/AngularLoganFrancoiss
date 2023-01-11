import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployesComponent} from "./components/employes/employes.component";
import {ProjetsComponent} from "./components/projets/projets.component";
import {FormsModule, FormGroup} from "@angular/forms";
import {UpdateemployeComponent} from "./components/updateemploye/updateemploye.component";
import {UpdateprojetComponent} from "./components/updateprojet/updateprojet.component";
import {HomeComponent} from "./components/home/home.component";
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {ExamenComponent} from "./components/examen/examen.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NewemployeComponent} from "./components/newemploye/newemploye.component";
import {NewprojetComponent} from "./components/newprojet/newprojet.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    ProjetsComponent,
    UpdateemployeComponent,
    UpdateprojetComponent,
    HomeComponent,
    MainMenuComponent,
    ExamenComponent,
    NewemployeComponent,
    NewprojetComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
