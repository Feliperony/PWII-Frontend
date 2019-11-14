import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder} from '@angular/forms';
import { ProjetoAPIService } from '../service/projeto-api.service';

@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  constructor(private formbuilder : FormBuilder, private projetoapiservice : ProjetoAPIService) { }

  ngOnInit() {
  }
  FormGroup

}
