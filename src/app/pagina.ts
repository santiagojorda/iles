import { Component } from '@angular/core';



export class Pagina{

    nombrePagina : string;
    direccion : string;

    constructor(nombrePagina : string, direccion){
        this.nombrePagina = nombrePagina;
        this.direccion = direccion;
    }

    obtenerNombrePagina(){
        return this.nombrePagina;
    }

    obtenerDireccion(){
        return "/" + this.direccion;
    }

    obtenerDireccionSinBarra(){
        return this.direccion;
    }

}