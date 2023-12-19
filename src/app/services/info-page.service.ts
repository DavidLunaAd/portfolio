import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;

  equipo: any[] = [];


  constructor( private http: HttpClient ) {

   this.cargarInfo();
   this.cargarEquipo();

  }

  private cargarInfo(){
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {
          this.cargada = true;
          this.info= resp;
         // console.log("Info assets", resp);
    })
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-39a0c-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe( (resp: any) => {
          this.equipo = resp;
          //console.log("Equipo", resp);
    })  }
}
