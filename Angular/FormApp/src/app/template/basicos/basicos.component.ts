import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
@ViewChild("miFormulario") miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }



  guardar() {
    console.log(this.miFormulario.controls['producto']);

    this.miFormulario.resetForm()
    
  }
}
