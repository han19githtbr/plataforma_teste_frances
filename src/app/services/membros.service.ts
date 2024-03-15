// membro.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Member } from '../../../../backend/models/member.model.js'
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MembrosService {

  //private baseUrl = 'http://localhost:3000'; // Altere para a nova URL do backend

  //private baseUrl = 'mongodb+srv://frances_plataforma:19handyrio@francescluster.m8koll3.mongodb.net/';

  private baseUrl = 'https://backend-plataforma-frances.onrender.com/'; //link do deploy do Back-end na plataforma render

  constructor(private http: HttpClient){};


  membros():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/members`);
  }

  membroById(id: string | number):Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/members/${id}`);
  }

}

  /*membros() {
    return this.http.get<Member>(`${this.baseUrl}/api/members`);
  }

  membroById(id: string | number) {
    return this.http.get<Member>(`${this.baseUrl}/api/members/${id}`);
  }*/


  /*membros() {
    return this.http.get<Membro[]>('http://localhost:3000/api/membros');
  }

  membroById(id: string | number) {
    return this.http.get<Membro>('http://localhost:3000/api/membros/' + id);
  }*/
