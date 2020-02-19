import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataDummy = [
    {
      'name': 'Stephen',
      'lastname': 'Strange',
      'color': 'blue',
      'value': 12
    },
    {
      'name': 'Thor',
      'lastname': 'Odinson',
      'color': 'blue',
      'value': 11
    },
    {
      'name': 'Tony',
      'lastname': 'Stark',
      'color': 'red',
      'value': 13
    },
    {
      'name': 'Peter',
      'lastname': 'Parker',
      'color': 'red',
      'value': 8
    },
    {
      'name': 'Bruce',
      'lastname': 'Banner',
      'color': 'blue',
      'value': 17
    },
  ]
}
