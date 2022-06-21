import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ObservablesService } from '../app/service/observables.service';

@Component({
  selector: 'app-TrafficLight',
  templateUrl: './TrafficLight.component.html',
  styleUrls: ['./TrafficLight.css']
})
export class TrafficLightComponent implements OnInit {

lightsOn : string = ''
selectedColor : string = ''

constructor(
  private _ObservableSrv : ObservablesService) {
 }
ngOnInit(): void {
  
  this._ObservableSrv.lightsOn.subscribe (
    (text) => (this.lightsOn = text)
  )
  this._ObservableSrv.selectedColor.subscribe (
    (text) => (this.selectedColor = text)
  )
}


}
