export class persona {
    id?: number;
    nombreCompleto: string;
    titulo: string;
    img: string;
    descripcion: string;
    formspree: string;

    constructor(nombreCompleto: string, titulo: string, img: string, descripcion: string, formspree: string) {
    this.nombreCompleto = nombreCompleto;
    this.titulo = titulo;
    this.img = img;
    this.descripcion = descripcion;
    this.formspree = formspree;
    }
}