import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/service/perfil.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  perf : Perfil = null;

  constructor(private sPerfil: PerfilService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPerfil.detail(id).subscribe(
      data =>{
        this.perf = data;
      }, err =>{
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPerfil.update(id, this.perf).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar perfil");
         this.router.navigate(['']);
      }
    )
  }

}
