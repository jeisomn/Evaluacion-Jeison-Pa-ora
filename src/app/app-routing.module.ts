import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';



const routes: Routes = [
  { path: '', redirectTo: 'pages/inicio', pathMatch: 'full' }, // Redirige al componente Inicio por defecto
  { path: 'pages/inicio', component: InicioComponent },
  { path: 'pages/lista', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
