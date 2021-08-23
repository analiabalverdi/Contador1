import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() contador:number;
  
  title = 'Contador1';

  constructor() { 
  this.contador=0
  }
  
  incrementar(){
    this.contador++;
    console.log(this.contador);

  }
  
  decrementar(){
    this.contador--;
    console.log(this.contador);

  }

}
