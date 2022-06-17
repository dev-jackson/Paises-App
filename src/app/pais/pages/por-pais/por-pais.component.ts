import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from "../../interfaces/country.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  isError: boolean = false;
  countries: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){
    this.isError = false;
    this.termino = termino;

    if(this.termino.trim().length == 0){ return; }

    this.paisService.buscarPais( this.termino )
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.isError = true;
        console.log('Error: ', err);
        this.countries = [];
      });
  }
  sugerencias(){
    this.isError = false;
  }
}
