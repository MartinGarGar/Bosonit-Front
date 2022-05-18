import { temporaryAllocator } from "@angular/compiler/src/render3/view/util";
import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
    <h2>{{title}}!</h2>
    <h3>La base es: {{base}} </h3>

    <button (click)="acumular(base)"> +{{base}} </button>

    <span> {{numero}} </span>
    <button (click)="acumular(-base)"> -{{base}} </button>
    
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10;
  
    base: number = 5
  
    sumar() {
      this.numero += 1;
    }
  
    restar(){
      this.numero -=1
    }
  
    acumular( valor: number) {
      this.numero += valor;
    }
}