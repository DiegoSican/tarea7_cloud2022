import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'raza'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface mascota{
  id: number;
  nombre: string;
  raza: string;
}

const ELEMENT_DATA: mascota[] = [
  {id: 1, nombre: 'Firulais', raza: 'PERRO'},
  {id: 2, nombre: 'Lassie', raza: 'PERRO'},
  {id: 3, nombre: 'Garfield', raza: 'GATO'},
  {id: 4, nombre: 'Felix', raza: 'GATO'},
  {id: 5, nombre: 'Nemo', raza: 'PEZ'},
];
