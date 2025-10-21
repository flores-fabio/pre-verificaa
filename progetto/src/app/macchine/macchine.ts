import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchine',
  imports: [],
  templateUrl: './macchine.html',
  styleUrl: './macchine.css'
})
export class Macchine {
  @Input()macchine: string = "";
}
