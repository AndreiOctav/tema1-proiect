import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel6',
  templateUrl: './tabel6.component.html',
  styleUrls: ['./tabel6.component.css']
})
export class Tabel6Component {
  headears5 =["Judet","Numar_de_cazuri"]
  data5 = [
    {
      Judet: "Iasi",
      Numar_de_cazuri: "125682 "
    },
    {
      Judet: "Cluj",
      Numar_de_cazuri: "186644"
    },
    {
      Judet: "Timis",
      Numar_de_cazuri: "172563"
    },
    {
      Judet: "Ilfov",
      Numar_de_cazuri: "133021"
    }
  ]

}
