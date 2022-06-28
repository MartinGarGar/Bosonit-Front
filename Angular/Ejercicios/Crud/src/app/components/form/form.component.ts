import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../shared/validator/validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

countries : string[] = [
  'España',
  'Francia',
  'Alemania'
]
emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

miFormulario: FormGroup = this._fb.group({
  name: ['' , [ Validators.required,  ]   ],
  pass1: ['' , [ Validators.required,  Validators.minLength(4)]   ],
  pass2: ['' , [ Validators.required,  ]   ],
  email: ['' , [ Validators.required, Validators.pattern(this._validatorSv.emailPattern)  ]   ],
  suscription: [false , [ Validators.required,  ]   ],
  country: [ , [ Validators.required,  ]   ],
  city: ['' , [ Validators.required,  ]   ],

},
{
  Validators: [ this._validatorSv.comparePassword('pass1','pass2')],
})

  constructor(private _fb : FormBuilder,
              private _validatorSv : ValidatorService) { }

  ngOnInit(): void {
  }

  invalidInput( input: string ) {
    return this.miFormulario.get(input)?.invalid
            && this.miFormulario.get(input)?.touched;
  }

  show() {
    console.log(this.miFormulario.value);
    
  }

}
