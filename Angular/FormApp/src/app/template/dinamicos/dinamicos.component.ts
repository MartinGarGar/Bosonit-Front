import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string,
  favoritos: Favorito []
}

interface Favorito {
  id: number,
  nombre: string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona : Persona = {
    nombre: 'Martin',
    favoritos: [
      {
        id : 1,
      nombre: 'SuperMario'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }




  guardar() {
    console.log('posted');
    
  }
}
