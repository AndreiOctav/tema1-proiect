import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel5',
  templateUrl: './tabel5.component.html',
  styleUrls: ['./tabel5.component.css']
})
export class Tabel5Component {
  headears4 = ["City_1","City_2","Distance"]
  data4 = [
    {
      City_1: "Bucharest",
      City_2: "Iasi",
      Distance: "392 km"
    },
    {
      City_1: "Bucharest",
      City_2: "Timisoara",
      Distance: "546 km"
    },
    {
      City_1: "Bucharest",
      City_2: "Constanta",
      Distance: "261 km"
    },
    {
      City_1: "Bucharest",
      City_2: "Cluj",
      Distance: "448 km"
    }
  ]

}
