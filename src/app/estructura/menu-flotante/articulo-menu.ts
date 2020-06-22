


export class ArticuloMenu{

    nombrePagina : string;
    modeloHTML : string;

    constructor(nombrePagina : string, modeloHTML : string){
        this.nombrePagina = nombrePagina;
        this.modeloHTML = modeloHTML
    }

    obtenerNombrePagina(){
        return this.nombrePagina;
    }

}