import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

 @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor (private dbzService: DbzService) {}

  //Forma de enviar información al padre
//@Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
  
   // this.onNuevoPersonaje.emit(this.nuevo) -----> esto es del metodo output

   this.dbzService.agregarPersonaje(this.nuevo)
     this.nuevo = { nombre: '', poder: 0}
     
   }

}
