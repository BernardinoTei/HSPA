import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprety-card',
  templateUrl: './proprety-card.component.html',
  styleUrls: ['./proprety-card.component.css']
})
export class PropretyCardComponent{
  @Input() proprety: any;

}
