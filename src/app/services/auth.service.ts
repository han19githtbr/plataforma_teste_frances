import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { User } from '../../../../backend/models/user.model.js'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private baseUrl = 'http://localhost:3000'; // Altere para a nova URL do backend

  //private baseUrl = 'mongodb+srv://frances_plataforma:19handyrio@francescluster.m8koll3.mongodb.net/';


  private baseUrl = 'https://backend-plataforma-frances.onrender.com/'; //link do deploy do Back-end na plataforma render

  constructor(private http: HttpClient) { }

  login(values: { email: string, password: string }) {
    return this.http.post<any>(`${this.baseUrl}/api/users/login`, values);
  }

  register(user: any) {
    return this.http.post<any>(`${this.baseUrl}/api/users/register`, user);
  }

  logout() {
    // Remover o usuário do localStorage ou de onde você salvou
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    // Verificar se o usuário está autenticado, verificando se está no localStorage ou onde você salvou
    return !!localStorage.getItem('user');
  }
}


/*login(values: { email: string, password: string }) {
    return this.http.post<User>('http://localhost:3000/api/usuarios/login', values)
      .pipe(
        tap((user: User) => {
          // Salvar o usuário no localStorage ou em algum lugar para manter a sessão
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
  }

  register(user: User) {
    return this.http.post<User>('http://localhost:3000/api/usuarios/register', user);
  }*/

/*login(values: { email: string, password: string }) {
  return this.http.post<User>('http://localhost:3000/api/usuarios/login', values)
    .pipe(
      tap((user: User) => {
        // Salvar o usuário no localStorage ou em algum lugar para manter a sessão
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
}

register(user: User) {
  return this.http.post<User>('http://localhost:3000/api/usuarios/register', user);
}*/



/*Nesse código:

No método login, após fazer a solicitação HTTP para o backend,
usamos o operador tap do RxJS para salvar o usuário retornado
no localStorage. Isso é útil para manter o usuário autenticado
entre as páginas da aplicação.

No método logout, removemos o usuário do localStorage para
desconectá-lo.

No método isAuthenticated, verificamos se há um usuário no
localStorage. Se houver, consideramos o usuário autenticado.*/
