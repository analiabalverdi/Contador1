import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  
  @Input () contador: number;
  @Output() cambioContador= new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
    console.log(this.contador);
  }
  
  dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
    console.log(this.contador);
  }
    nietoResetea(evento:number){ 
    this.contador = evento
    this.cambioContador.emit(this.contador);
 
    }


}
