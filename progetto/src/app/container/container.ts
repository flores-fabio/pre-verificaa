import { Component } from '@angular/core';
import { Macchine } from "../macchine/macchine";

@Component({
  selector: 'app-container',
  imports: [Macchine],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  macchine: string[]; //Creiamo il nostro vettore di stringhe 
  constructor() { 
     this.macchine = ['gruu', 'lamborghini', 'furgone', 'ambulanza', 'polizia',]; //Riempiamo il vettore
  }
  ngOnInit() {
  }
}