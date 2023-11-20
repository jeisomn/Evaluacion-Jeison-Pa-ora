import { Component } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';

import { NotasService } from 'src/app/service/notas.service';
import { Notas } from './models/model-notas';
import { ServiceFirebaseService } from 'src/app/service/service-firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  notas: Notas = new Notas();

  constructor(private serviceNotas: NotasService, private route: Router, private serviceFireStore: ServiceFirebaseService){

  
  
  }

  save(){
    this.serviceNotas.addNota(this.notas);
    this.serviceFireStore.save(this.notas)
    console.log(this.serviceNotas.getNotas())
  }


  




}
