import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comicss',
      desc: 'Marvel - Comics'
    },
  ]
  heroe: Heroe = {
    superhero :'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img :''
  }
  constructor(private _heroesSrv: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe (
      switchMap( ({id}) => this._heroesSrv.getHeroePorId(id))
    )
      .subscribe(  heroe => this.heroe = heroe
       )

  }
  guardar() {
    if (this.heroe.superhero.trim().length === 0){
    
      return
    }
    console.log(this.heroe.id);
    
    if (this.heroe.id) {
      this._heroesSrv.actualizarHeroe(this.heroe).subscribe({
        next: heroe => console.log('Actulizando', heroe.superhero)});
        
    }
    else {
    this._heroesSrv.agregarHeroe(this.heroe)
    .subscribe (resp => {
      console.log('respuesta', resp);
      
    })}
  }

}
