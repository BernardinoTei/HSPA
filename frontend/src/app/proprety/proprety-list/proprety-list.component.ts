import { Component, Input, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProprety } from '../IProprety.interface';

@Component({
  selector: 'app-proprety-list',
  templateUrl: './proprety-list.component.html',
  styleUrls: ['./proprety-list.component.css']
})
export class PropretyListComponent implements OnInit {

  propreties!: IProprety[];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllPropreties().subscribe({
      next: data => {
        this.propreties = data;
        console.log(this.propreties);
      },
      error: error => { console.log('httperror');  console.log(error); },
    });

  }



}
