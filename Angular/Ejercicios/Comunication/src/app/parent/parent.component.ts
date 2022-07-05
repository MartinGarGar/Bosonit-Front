import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../app/service/comunication.service';
import { ObservablesService } from '../app/service/observables.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childMsg! : string
  parentMsg! : string

  constructor(private _ComunicationSrv : ComunicationService,
    private _ObservableSrv: ObservablesService ) { }

  ngOnInit(): void {
    this._ComunicationSrv.parentMsg.subscribe(
      (text) => (this.parentMsg = text)
    );
    this._ObservableSrv.parentMsg.subscribe(
      (text) => (this.parentMsg = text)
    )

  }
inputProperty() {
  this.childMsg = 'PARENT USING IPUNT PROPERTY'
}
outputProperty($event : string) {
  this.parentMsg = $event
}
parentSrvEmit() {
  this._ComunicationSrv.sendChildMsg('PARENT USING SERVICE')
}
parentObservable() {
  this._ObservableSrv.childMsg.next('PARENT USING OBSERVABLE')
  
}

}
