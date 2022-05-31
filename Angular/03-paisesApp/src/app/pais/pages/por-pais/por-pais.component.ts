import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean= false
  paises: Country[] = []

  constructor (private paisService : PaisService) {}

  buscar (termino : string) {
    this.hayError=false;
    this.termino = termino //este segundo termino es el que recibo como agurmento
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( (paisesRes) => {
        this.paises = paisesRes
        
        console.log(this.paises);
  
        },
        (err)=> {
          this.hayError=true;
          this.paises = []
          
        });


    
  }
  sugerencias ( termino : string) {
    this.hayError = false

    //TODO: crear sugerencias
  }

}
