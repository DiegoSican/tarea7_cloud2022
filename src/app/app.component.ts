import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea08';

  constructor(private router: Router){
    
  }

  openComponente(ruta: string) {
    this.router.navigateByUrl('/' + ruta);
  }
}