import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel4',
  templateUrl: './tabel4.component.html',
  styleUrls: ['./tabel4.component.css']
})
export class Tabel4Component {
  headears3 = ["Product", "Price"]
data3 = [
  {
    Product: "Watter bottle",
    Price: "1 dollar"
  },
  {
    Product: "Chocolate bar",
    Price: "5 dollars"
  },
  {
    Product: "Coca-Cola",
    Price: "3 dollars"
  },
  {
    Product: "Chicken",
    Price: "10 dollars"
  }
]
}
