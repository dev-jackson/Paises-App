import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    if (this.termino.trim().length == 0) { return; }

    this.paisService.buscarPaisPorCapital(termino)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.isError = true;
        console.log('Error: ', err);
        this.countries = [];
      });
  }

  sugerencias() {
    this.isError = false;
  }

  ngOnInit(): void {
  }

}
