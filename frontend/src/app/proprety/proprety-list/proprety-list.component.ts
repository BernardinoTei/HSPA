import { Component, Input, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-proprety-list',
  templateUrl: './proprety-list.component.html',
  styleUrls: ['./proprety-list.component.css']
})
export class PropretyListComponent implements OnInit {

  propreties: any;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllPropreties().subscribe(data => {
      this.propreties = data;
      console.log(this.propreties);
    });

  }



}
