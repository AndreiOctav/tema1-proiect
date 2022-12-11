import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel3',
  templateUrl: './tabel3.component.html',
  styleUrls: ['./tabel3.component.css']
})
export class Tabel3Component {
  headears2 = ["Subject", "Passing"]
data2 = [
  {
    Subject: "Math",
    Passing: "yes"
  },
  {
    Subject: "Chemistry",
    Passing: "yes"
  },
  {
    Subject: "English",
    Passing: "no"
  },
  {
    Subject: "Biology",
    Passing: "no"
  }
]
}
