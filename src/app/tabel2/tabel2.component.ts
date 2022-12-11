import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel2',
  templateUrl: './tabel2.component.html',
  styleUrls: ['./tabel2.component.css']
})
export class Tabel2Component {
  headears1 = ["Country", "Capital"]
data1 =[
  {
    Country: "Romania",
    Capital: "Bucharest"
  },
  {
    Country: "Hungary",
    Capital: "Budapest"
  },
  {
    Country: "France",
    Capital: "Paris"
  },
  {
    Country: "Germany",
    Capital: "Berlin"
  },
]

}
