export class Experiencia {
    id? : number;
    nombreE :string;
    descripcionE :string;
    empleoE :string;
    fechaE :string;
    imgEmpresaE :string;

    constructor(nombreE:string, descripcionE:string, empleoE:string, fechaE:string, imgEmpresaE:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.empleoE = empleoE;
        this.fechaE = fechaE;
        this.imgEmpresaE = imgEmpresaE;
    }
}
