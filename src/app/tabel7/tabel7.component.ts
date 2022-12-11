import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel7',
  templateUrl: './tabel7.component.html',
  styleUrls: ['./tabel7.component.css']
})
export class Tabel7Component {
  headears6 =["Country","Internet_speed"]
  data6 = [
    {
      Country: "Romania",
      Internet_speed: "131,96 Mbps"
    },
    {
      Country: "Germany",
      Internet_speed: "41 Mbps"
    },
    {
      Country: "Netherlands",
      Internet_speed: "70 Mbps "
    },
    {
      Country: "England",
      Internet_speed: "76 Mbps"
    }
  ]
}
