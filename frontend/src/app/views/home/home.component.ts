import { HeaderService } from './../../components/templete/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.HeaderData = {
     title:'inicio',
     icon: 'home',
     routerUrl: ''
    }

  }

  ngOnInit(): void {
  }

}
