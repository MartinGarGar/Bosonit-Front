import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

 public parentMsg: EventEmitter<any> = new EventEmitter
 public childMsg: EventEmitter<any> = new EventEmitter

 

 sendParentMsg(text: string): void {
  this.parentMsg.emit(text);
}

sendChildMsg(text: string): void {
  this.childMsg.emit(text);
}
}
