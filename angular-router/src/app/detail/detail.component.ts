import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PATH_HOME, PATH_DETAIL } from '../Const';
import{HomeComponent} from '../home/home.component'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idDetail:number=2;
  constructor(private router:Router,private route:ActivatedRoute) { }
  
  navigateToHome(){
    this.router.navigate([PATH_HOME]);
  }
  navigateToDetail(){
    this.router.navigate([PATH_DETAIL,this.idDetail]);
  }
  ngOnInit() {
  console.log('idDetaill snapshot',this.route.snapshot.paramMap.get('idDetail'));
  this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
      });
  }
  
  
}
