import { Component, OnInit } from '@angular/core';
import { Formation } from '../entity/formation';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css'],
})
export class FormationsComponent implements OnInit {
  formations: Array<Formation> = [];
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular'),
      new Formation('Module JavaScript'),
      new Formation('Module TypeScript'),
    ],
    this.route.data.subscribe(data => console.log('Formations', data['formations'])); 
  }

}
