import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  @Input() contador:number;
  @Output() cambioContador= new EventEmitter<number>();

  constructor() { 
  }
  
  ngOnInit(): void {
  }
   
  resetear(){
    this.contador=0
    this.cambioContador.emit(this.contador);
  }


}
