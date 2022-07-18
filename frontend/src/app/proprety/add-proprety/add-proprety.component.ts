import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-proprety',
  templateUrl: './add-proprety.component.html',
  styleUrls: ['./add-proprety.component.css']
})
export class AddPropretyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submtted form');

  }
}
