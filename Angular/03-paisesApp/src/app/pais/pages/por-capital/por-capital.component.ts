import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean= false
  paises: Country[] = []

  constructor (private paisService : PaisService) {}

  buscar (termino : string) {
    this.hayError=false;
    this.termino = termino //este segundo termino es el que recibo como agurmento
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
      .subscribe( {
        next: (paisesRes) => {
          this.paises = paisesRes
        },
        error: (err) => {
          this.hayError=true;
          this.paises = []

        }
      });


    
  }}
 
