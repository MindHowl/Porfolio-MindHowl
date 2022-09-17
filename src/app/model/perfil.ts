export class Perfil{
    id?: number;
    nombreCompleto: string;
    titulo: string;
    img: string;
    descripcion: string;
    formspree: string;
    facebook: string;
    github: string;
    instagram: string;
    linkedin: string;
    stackoverflow: string;

    constructor(nombreCompleto: string, descripcion: string, formspree: string, facebook: string, github: string, instagram: string, stackoverflow: string, img: string, titulo: string, linkedin: string) {
        this.nombreCompleto = nombreCompleto;
        this.descripcion = descripcion;
        this.formspree = formspree;
        this.facebook = facebook;
        this.github = github;
        this.instagram = instagram;
        this.stackoverflow = stackoverflow;
        this.img = img;
        this.titulo = titulo;
        this.linkedin = linkedin;
    }



}