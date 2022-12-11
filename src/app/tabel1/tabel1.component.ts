import { Component } from '@angular/core';

@Component({
  selector: 'app-tabel1',
  templateUrl: './tabel1.component.html',
  styleUrls: ['./tabel1.component.css']
})
export class Tabel1Component {
  headears = ["ID", "Name", "Age", "Gender"]
  data = [
    {
       ID  : '1',
      Name  : 'Andrei',
      Age : "24",
      Gender : "Male"  
    },
    {
      ID  : '2',
     Name  : 'Ioana',
     Age : "19",
     Gender : "Female"  
   },
   {
    ID  : '3',
   Name  : 'George',
   Age : "22",
   Gender : "Male"  
 },
 {
  ID  : '4',
 Name  : 'Viorel',
 Age : "23",
 Gender : "Male"  
},
  ]

}
