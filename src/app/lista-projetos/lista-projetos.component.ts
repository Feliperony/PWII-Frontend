import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

  projetos = [{"nome":"Projeto1","sala":"L08","turma":"2Q"},
              {"nome":"Projeto2","sala":"L09","turma":"2B"}];

  constructor(private router : Router) { }

  ngOnInit() {
  }
  detalhes(id: number) {
    this.router.navigate(['detalhe-projeto',id]);
  }
}
