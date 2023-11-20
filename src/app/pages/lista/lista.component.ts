import { Component } from '@angular/core';
import { Notas } from '../inicio/models/model-notas';
import { NotasService } from 'src/app/service/notas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  nota!: NotasService; 

  notas: Notas[ ] = [ ];

  listaNotas: any

  constructor(
    private notasService: NotasService ) {
      
    this.notas = notasService.getNotas();

    // this.listaRecetas= this.recetasFirebase.getAll();


  }

  eliminarNotas(nota: Notas): void {
    this.notasService.eliminarReceta(nota);
    this.notas=this.notasService.getNotas();
  }  


  eliminarNotaFire(uid: string) {
    // Elimina la receta de Firebase
    this.listaNotas.elimarreceta(uid)
}
}
