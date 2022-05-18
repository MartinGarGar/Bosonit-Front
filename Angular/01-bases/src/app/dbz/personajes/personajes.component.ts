import { Component, Input } from '@angular/core';

interface Personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {

 @Input() personajes: Personaje[] = []
}
