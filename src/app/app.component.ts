import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Evalucion-Jeison-Panora';

  paginas = [
    { enlace: 'Inicio', path: 'pages/inicio' },
    { enlace: 'Lista', path: 'pages/lista' },

  ];
}
