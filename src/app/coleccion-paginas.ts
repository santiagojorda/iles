
import { Pagina } from './pagina';

// const INICIO_ID = 0;
// const PRINCIPIOS_ID = 1;
// const QUIENES_SOMOS_ID = 2;
// const TRAYECTORIA_ID = 3;
// const PRESIDENCIA_ID = 4;
// const CIUDADES_ID = 5;
// const LAUDATOS_ID = 6;
// const INVESTIGACION_ID = 7;

export class ColeccionPaginas {


    paginas : Pagina[] = new Array();

    constructor(){

        var mockPaginas = new Array(
            new Pagina("Inicio", ""),
            new Pagina("Principios rectores, objetivos y servicios", "principios-objetivos-servicios"),
            new Pagina("¿Quiénes somos?", "quienes-somos"),
            new Pagina("Trayectoria institucional", "trayectoria-institucional"),
            new Pagina("Presidencia y expertos", "presidencia-y-expertos"),
            new Pagina("Ciudades del aprendizaje", "ciudades-del-aprendizaje"),
            new Pagina("Laudato Si´", "laudato-si"),
            new Pagina("Investigación y Opinión", "investigacion-y-opinion"),
        );

        for(let i in mockPaginas){
            this.paginas.push(mockPaginas[i]);
        }


    }

    obtenerNombrePagina(index : number){
        return this.paginas[index].obtenerNombrePagina();
    }

    obtenerDireccion(index : number){
        return this.paginas[index].obtenerDireccion();
    }
    obtenerDireccionSinBarra(index : number){
        return this.paginas[index].obtenerDireccionSinBarra();
    }
}