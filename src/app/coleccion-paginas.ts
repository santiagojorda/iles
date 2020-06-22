
import { Pagina } from './pagina';

import { PrincipiosObjetivosServiciosComponent } from './paginas/principios-objetivos-servicios/principios-objetivos-servicios.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { QuienesSomosComponent } from './paginas/quienes-somos/quienes-somos.component';
import { TrayectoriaInstitucionalComponent } from './paginas/trayectoria-institucional/trayectoria-institucional.component';
import { PresidenciaYExpertosComponent } from './paginas/presidencia-y-expertos/presidencia-y-expertos.component';
import { CiudadesDelAprendizajeComponent } from './paginas/ciudades-del-aprendizaje/ciudades-del-aprendizaje.component';
import { LaudatoSiComponent } from './paginas/laudato-si/laudato-si.component';
import { InvestigacionYOpinionComponent } from './paginas/investigacion-y-opinion/investigacion-y-opinion.component';

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