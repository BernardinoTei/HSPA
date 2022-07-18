import { Component, Input, OnInit } from '@angular/core';
import { IProprety } from '../IProprety.interface';

@Component({
  selector: 'app-proprety-card',
  templateUrl: './proprety-card.component.html',
  styleUrls: ['./proprety-card.component.css']
})
export class PropretyCardComponent{
  @Input() proprety!: IProprety;

}
