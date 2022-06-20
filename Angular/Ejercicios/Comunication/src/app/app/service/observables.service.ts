import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  public parentMsg: BehaviorSubject<string> = new BehaviorSubject('')
  public childMsg: BehaviorSubject<string> = new BehaviorSubject('')


  constructor() { }
}
