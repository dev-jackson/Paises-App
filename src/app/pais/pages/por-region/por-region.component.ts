import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.paisService.buscarPorRegion(termino)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        console.log(err);
        this.countries = [];
      });
  }
}
