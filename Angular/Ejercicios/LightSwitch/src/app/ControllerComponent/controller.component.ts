import { Component, OnInit } from '@angular/core';
import { ObservablesService } from '../app/service/observables.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  colors : string[] = ['rojo', 'amarillo', 'verde']

  constructor(private _obersvableSrv : ObservablesService) { }

  ngOnInit(): void {
  }

  switchOn (event: any) {
    if (event.target.checked) {
      this._obersvableSrv.lightsOn.next('on')
    }
    if (!event.target.checked) {
      this._obersvableSrv.lightsOn.next('off');
    }
  } 
  selectColor (event: any) {
    this._obersvableSrv.selectedColor.next(event.target.value)

  }
}
