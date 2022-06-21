import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  public lightsOn: BehaviorSubject<string> = new BehaviorSubject('off')
  public selectedColor: BehaviorSubject<string> = new BehaviorSubject('rojo')


  constructor() { }
}
