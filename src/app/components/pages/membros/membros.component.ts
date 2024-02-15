import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../../../../backend/models/member.model.js'
import { MembrosService } from 'src/app/services/membros.service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {

  //@Input() membros: Member[] = [];

  constructor(private membroService: MembrosService) {}

  ngOnInit(): void {
    //this.carregarMembros();
    //this.clearCacheAndCookies();
  }

  /*carregarMembros() {
    this.membroService.membros().subscribe(
      membros => {
        this.membros = membros;
      },
      error => {
        console.error('Erro ao carregar membros:', error);
      }
    );
  }*/

}
