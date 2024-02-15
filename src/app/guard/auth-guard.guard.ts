import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.authService.isAuthenticated()) {
      if(state.url != '/login') {
        this.router.navigate(['/login']);
      }
      return false;
    } else {
      return true;
    }
  }
}


/*Este guarda de rota é responsável por verificar se o
usuário está autenticado antes de permitir o acesso
a determinadas rotas. Se o usuário não estiver
autenticado, ele é redirecionado para a página de login.*/
