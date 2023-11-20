import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Notas } from '../pages/inicio/models/model-notas';


@Injectable({
  providedIn: 'root'
})

export class NotasService {

  nota: Notas[] = [];

  constructor(private route: Router) { }


  addNota(nota: Notas){
    this.nota.push(nota);
  }


  getNotas(){
    return this.nota;
  };

  eliminarReceta(notas: Notas) {
    this.nota = this.nota.filter(r => r !== notas);
  }

}
