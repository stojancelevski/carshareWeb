import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
    this.homeService.getUsers().subscribe(data =>
      console.log(data));
    this.homeService.getRoutes().subscribe(data =>
    console.log(data));
  }

  ngOnInit() {
  }

}
