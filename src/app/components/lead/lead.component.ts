import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { persona } from 'src/app/model/persona.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  perfil: Perfil[] = [];

  constructor(private PerfilS: PerfilService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPerfil();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPerfil(): void{
    this.PerfilS.lista().subscribe(
      data =>{
        this.perfil = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.PerfilS.delete(id).subscribe(
        data => {
          this.cargarPerfil();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
