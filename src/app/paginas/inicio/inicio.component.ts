import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle('ILES :: Instituto Latinoamericano de Estudios Sociales');
  }
}
