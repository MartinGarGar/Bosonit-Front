import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api.service';
import { ValidatorService } from '../../shared/validator/validator.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

countries : string[] = [
  'España',
  'Francia',
  'Alemania',
  'Portugal'
]
emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

miFormulario: FormGroup = this._fb.group({
  id: [],
  name: ['' , [ Validators.required,  ]   ],
  password: ['' , [ Validators.required,  Validators.minLength(4)]   ],
  password2: ['' , [ Validators.required,  ]   ],
  email: ['' , [ Validators.required, Validators.pattern(this._validatorSv.emailPattern)  ]   ],
  suscription: [false , [ Validators.required,  ]   ],
  country: [ , [ Validators.required,  ]   ],
  city: ['' , [ Validators.required,  ]   ],

},
/* {
  Validators: [ this._validatorSv.comparePassword('password','password2')],
} */)


  users: User[] = [];
  values !: User;


  constructor(private _fb : FormBuilder,
              private _validatorSv : ValidatorService,
              private _apiSv : ApiService,
              ) {    this.loadUser() }

  ngOnInit(): void {

  }



 
  invalidInput( input: string ) {
    return this.miFormulario.get(input)?.invalid
            && this.miFormulario.get(input)?.touched;
  }

  
  loadUser() {
    this._apiSv.userObservable$.subscribe(
      user => {
        this.miFormulario.patchValue(user)
      }
    )
  }

 guardar()  {

      this.values = this.miFormulario.value
      if(this.values.id){
    if (this.users.filter (e => { e.id === this.values.id})) {
      this._apiSv.editUser(this.values).subscribe(() => {
        this._apiSv.loadUsers()

        
      });
      
    }}
    else {
      this._apiSv.createUser(this.values).subscribe ( () => {
        this._apiSv.loadUsers()
   
        
      })
    }
      this.miFormulario.reset()
 
      
  }
  show() {
    console.log( 'miformulario.value', this.miFormulario.value);
    
  }

}
