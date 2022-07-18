import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProprety } from '../IProprety.interface';

@Component({
  selector: 'app-proprety-list',
  templateUrl: './proprety-list.component.html',
  styleUrls: ['./proprety-list.component.css']
})
export class PropretyListComponent implements OnInit {
  SellRent = 0;
  propreties!: IProprety[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString() == 'buy-proprety') {
      this.SellRent = 1;
    }else if (this.route.snapshot.url.toString() === 'rent-proprety') {
      this.SellRent = 2;
    }
    this.housingService.getAllPropreties(this.SellRent).subscribe({
      next: data => {
        this.propreties = data;
        console.log(this.propreties);
        console.log(this.route.snapshot.url.toString());
      },
      error: error => { console.log('httperror');  console.log(error); },
    });

  }



}
