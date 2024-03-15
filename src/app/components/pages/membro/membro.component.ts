import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../../../../../backend/models/member.model.js'

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {

  //@Input() membro: Member

  constructor() { }

  ngOnInit() {
  }

}
