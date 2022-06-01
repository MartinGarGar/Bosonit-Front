import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre: string = 'Martin'

 mostrarNombre() {
   console.log(this.nombre);
   
 }
}
