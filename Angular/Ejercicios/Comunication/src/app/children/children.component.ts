import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunicationService } from '../app/service/comunication.service';
import { ObservablesService } from '../app/service/observables.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

@Input()  childMsg! :string
  
@Output() parentMsg : EventEmitter<string> = new EventEmitter()

constructor(private _ComunicationSrv : ComunicationService,
  private _ObservableSrv : ObservablesService) {
 }
ngOnInit(): void {
  this._ComunicationSrv.childMsg.subscribe(
    (text) => (this.childMsg = text)
  );

  this._ObservableSrv.childMsg.subscribe(
    (text) => (this.childMsg = text)
  )
}
childEmit() {
  this.parentMsg.emit('CHILD USING OUTPUT EVENT');
}
childSrvEmit() {
  this._ComunicationSrv.sendParentMsg('CHILD USING SERVICE')
}
childObservable() {
  this._ObservableSrv.parentMsg.next('CHILD USING OBSERVABLE')
  
}
}
