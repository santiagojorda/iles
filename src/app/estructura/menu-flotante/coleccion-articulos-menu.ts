
import { ArticuloMenu } from './articulo-menu';

export class ColeccionArticulosMenu {

    articulos : ArticuloMenu[] = new Array();

    constructor(){


        var mockArticulos = new Array(
            new ArticuloMenu("laudatos", "<h1 class='asd' routerLink='/laudato-si'>lau</h1>"),
            new ArticuloMenu("ciudades", "<h1 routerLink='/ciudades-del-aprendizaje'>cijud</h1>"),
            new ArticuloMenu("investigacion", "<h1>inves</h1>")
        );

        for (let i in mockArticulos) {
            this.articulos.push(mockArticulos[i]);
        }


    }

    eliminarArticulo(nombre : string){
        var posicionABorrar;

        for (let i = 0; i < this.articulos.length; i++) {
            if( nombre == this.articulos[i].obtenerNombrePagina() ){
                posicionABorrar = i;
            }
        }

        if (posicionABorrar){
            this.articulos.splice(posicionABorrar, 1);
        }
    }

    obtenerVista(i : number){
        return this.articulos[i].modeloHTML;
    }

    esta(nombre : string){
        var estaElArticulo : boolean = false;
        for (let i = 0; i < this.articulos.length; i++) {
            if( nombre == this.articulos[i].obtenerNombrePagina() ){
                estaElArticulo = true;
            }
        }

        return estaElArticulo;
    }


}