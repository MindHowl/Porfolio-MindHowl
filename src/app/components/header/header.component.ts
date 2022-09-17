import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/service/perfil.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  perfil: Perfil[] = [];
  constructor(private router: Router, private tokenService: TokenService,private PerfilS: PerfilService) { }
  scroll(el: HTMLElement) { el.scrollIntoView({behavior: 'smooth'}); }
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
    this.cargarPerfil();
  }
  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();
  }
  login() {
    this.router.navigate(['/login']);
  }
  cargarPerfil(): void{
  this.PerfilS.lista().subscribe(
    data =>{
      this.perfil = data;
    })
  }
}
