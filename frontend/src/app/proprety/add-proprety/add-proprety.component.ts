import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-proprety',
  templateUrl: './add-proprety.component.html',
  styleUrls: ['./add-proprety.component.css']
})
export class AddPropretyComponent implements OnInit {
@ViewChild('Form') addPropretyForm!: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submtted form');
    console.log(this.addPropretyForm);

  }
}
