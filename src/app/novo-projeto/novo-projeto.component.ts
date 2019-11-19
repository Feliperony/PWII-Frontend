import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { ProjetoAPIService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';

@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  Projetoform : FormGroup;

  constructor(public formbuilder : FormBuilder, public service : ProjetoAPIService) { }

  ngOnInit() {

    this.Projetoform = this.formbuilder.group({
      nome : this.formbuilder.control(''),
      orientadores : this.formbuilder.control(''),
      sala : this.formbuilder.control(''),
      turma : this.formbuilder.control('')
      })
 
  }

  onSalvar(FormGroup : FormGroup) {
    let projeto : Projeto = this.Projetoform.value;
    this.service.createProjeto(projeto)
    .subscribe(data => console.log(data),
    error => console.log(error));
    } 

}
