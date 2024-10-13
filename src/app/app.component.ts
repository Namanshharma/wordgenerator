import { Component } from '@angular/core';
import arraywords from './words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordgenerator';
  range : number = 0;
  array : any[] = [];
  changed(): void{
    this.range = this.range + 3;
  }
  generatewords() : void{
    this.array = arraywords.slice(0 , this.range)
  }
}
