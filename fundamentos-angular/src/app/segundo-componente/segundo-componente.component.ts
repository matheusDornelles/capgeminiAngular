import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome ="João";
  dataNascimentoJoao = "1995-01-01";
  urlImage = "/assets/imagem1.jpg";

  mostrarData () {
    alert (`a data é : ${this.dataNascimentoJoao}`)
  }
  
}
