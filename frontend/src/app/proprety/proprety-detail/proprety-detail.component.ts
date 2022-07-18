import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proprety-detail',
  templateUrl: './proprety-detail.component.html',
  styleUrls: ['./proprety-detail.component.css']
})
export class PropretyDetailComponent implements OnInit {
  public propretyId!: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propretyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe({
      next: (params) => { this.propretyId = +params['id'];}
    })
  }

  onback() {
    this.router.navigate(['/proprety-list']);
  }
  onSelectedNext() {
    this.propretyId += 1;
    this.router.navigate(['/proprety-detail', this.propretyId]);
  }

}
