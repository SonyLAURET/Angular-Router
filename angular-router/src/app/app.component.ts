import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { PATH_HOME, PATH_DETAIL } from './Const';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  idDetail: number = 1;
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }

  navigateToDetail() {
    this.router.navigate([PATH_DETAIL, this.idDetail]);
  }

  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      console.log('EVENTS', event);
      if (event instanceof NavigationStart) {
        console.log('Start', event);
      }
      if (event instanceof NavigationEnd) {
        console.log('END', event);
      }
      if (event instanceof NavigationError) {
        console.log('Error', event);
      }
      if (event instanceof NavigationCancel) {
        console.log('Cancel', event);
      }      
    })
    
  }
}
