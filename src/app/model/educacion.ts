export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    tituloE: string;
    imgInstE: string;
    fechaE: string;

    constructor(nombreE: string, descripcionE: string, tituloE: string, imgInstE: string, fechaE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.tituloE = tituloE;
        this.imgInstE = imgInstE;
        this.fechaE = fechaE;
    }
}
