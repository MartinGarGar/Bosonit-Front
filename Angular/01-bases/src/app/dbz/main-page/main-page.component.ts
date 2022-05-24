import { Component,  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre:'Vegetta',
      poder: 8500
    }
  ]

  nuevo: Personaje={
    nombre:'',
    poder:0
  }


  cambiarNombre(event: any) {
    console.log(event);
    
  }

  agregarNuevoPersonaje (newPersonaje: Personaje) {
    console.log('main page component');
    this.personajes.push(newPersonaje)
  }


}
