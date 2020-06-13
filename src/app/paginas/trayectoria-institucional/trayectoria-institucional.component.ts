import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-trayectoria-institucional',
  templateUrl: './trayectoria-institucional.component.html',
  styleUrls: ['../estilo-de-articulos.sass', './trayectoria-institucional.component.sass']
})
export class TrayectoriaInstitucionalComponent implements OnInit {

  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Trayectoria institucional');
  }

}
