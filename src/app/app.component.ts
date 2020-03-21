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
//función para ordenar dataDummy
  get sortData() {
    return this.dataDummy.sort((a, b) => {
      return (b.value) - (a.value);
    })
}

//función para realizar sumatoria de acuerdo al color 
ngOnInit() {

  // recorrer data
  for (let i = 0; i < this.dataDummy.length; i++) {
     
    // condición para seleccionar color azul
    if(this.dataDummy[i].color == 'blue'){
      
      //sumatoria
      this.totalBlue += this.dataDummy[i].value
      
    }
  // condición para seleccionar color rojo
    else { 

      //sumatoria
      this.totalRed += this.dataDummy[i].value
      
    }
    
  }
}

}
