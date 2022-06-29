import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

 public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  comparePassword ( password: string, password2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(password)?.value
      const pass2 = formGroup.get(password2)?.value

      if (pass1 !== pass2) {
        formGroup.get('password2')?.setErrors({noMatch : true})
        return { noMatch : true}
      }

      formGroup.get(password2)?.setErrors(null);
      return null;
    }
    
  }
}
