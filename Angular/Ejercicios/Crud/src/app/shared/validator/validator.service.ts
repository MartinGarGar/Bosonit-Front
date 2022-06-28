import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

 public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  comparePassword ( pass1: string, pass2: string) {
    return (FormGroup: AbstractControl): ValidationErrors | null => {

      const password1 = FormGroup.get(pass1)?.value
      const password2 = FormGroup.get(pass2)?.value

      if (password1 !== password2) {
        FormGroup.get('pass2')?.setErrors({noMatch : true})
        return { noMatch : true}
      }

      return null
    }
  }
}
