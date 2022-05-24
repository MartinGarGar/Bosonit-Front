import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

interface Personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {
// esta es una opción para obtener la información del padre
 // @Input() personajes: Personaje[] = []

 //esta es la forma de hacerlo más correcta
 get personajes () {
   return this.dbzService.personajes
 }

 constructor (private dbzService: DbzService){}
}
