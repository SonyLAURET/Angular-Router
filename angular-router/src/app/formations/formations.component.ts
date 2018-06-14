import { Component, OnInit } from '@angular/core';
import { Formation } from '../entity/formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  formations: Array<Formation> = [];
  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular'),
      new Formation('Module JavaScript'),
      new Formation('Module TypeScript')
    ]
  }

}
