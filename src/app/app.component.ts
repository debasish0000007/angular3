import { Component } from '@angular/core';

@Component({
  selector: 'ang',
  templateUrl: './app.component.html',
 // template:'<h1>Hello World</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string='Debasish '
  name:string='Babu'
  greet()
  {
    return this.name;
    
  }
}

