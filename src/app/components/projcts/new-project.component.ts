import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombre: string;
  descripcion: string;
  link: string;
  img: string;
  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.link, this.img);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
