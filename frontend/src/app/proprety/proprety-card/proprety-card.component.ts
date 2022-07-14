import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprety-card',
  templateUrl: './proprety-card.component.html',
  styleUrls: ['./proprety-card.component.css']
})
export class PropretyCardComponent{

  Proprety: any = {
    "Name": "B's House",
    "Type": "House",
    "Price": 150000
  }
}
