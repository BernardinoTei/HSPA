import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprety-list',
  templateUrl: './proprety-list.component.html',
  styleUrls: ['./proprety-list.component.css']
})
export class PropretyListComponent {

  propreties: Array<any> = [
    {
      "Id": 1,
      "Name": "B's House",
      "Type": "House",
      "Price": 150000
    },
    {
      "Id": 2,
      "Name": "A's House",
      "Type": "Apartment",
      "Price": 120000
    },
    {
      "Id": 3,
      "Name": "C's House",
      "Type": "House",
      "Price": 250000
    },
    {
      "Id": 4,
      "Name": "D's House",
      "Type": "Apartment",
      "Price": 450000
    },
    {
      "Id": 5,
      "Name": "E's House",
      "Type": "Apartment",
      "Price": 140000
    },
    {
      "Id": 6,
      "Name": "F's House",
      "Type": "House",
      "Price": 1320000
    }
  ]
}
