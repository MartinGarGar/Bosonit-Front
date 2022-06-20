import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent  {

    title : string = 'hellow world!'
    show : boolean = false
    buttonText : string = 'Muestrame'
 
    display () {
      if (this.show) {
        this.show = false
        this.buttonText = 'Muestrame'
      } 
      else {
        this.show = true
        this.buttonText = 'Ocultame'
      } 

    }



}
