import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PATH_HOME } from '../Const';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  constructor(private router:Router,private route:ActivatedRoute) { }
  
  navigateToHome(){
    this.router.navigate([PATH_HOME]);
  }
  ngOnInit() {
  console.log('idDetaill snapshot',this.route.snapshot.paramMap.get('idDetail'));
  this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
      });
  }
  
  
}
