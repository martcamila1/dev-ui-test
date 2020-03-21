import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalBlue = 0
  totalRed = 0
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

  get sortData() {
    return this.dataDummy.sort((a, b) => {
      return (b.value) - (a.value);
    })
}
ngOnInit() {
  
  for (let i = 0; i < this.dataDummy.length; i++) {
     
    if(this.dataDummy[i].color == 'blue'){
      
      this.totalBlue += this.dataDummy[i].value
      
    }
    else if(this.dataDummy[i].color == 'red') { 
      this.totalRed += this.dataDummy[i].value
      
    }
    
  }
}

}
