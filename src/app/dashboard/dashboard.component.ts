import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

     employee=[
      { "name": "raj", "email": "raj@gmail.com","mobileno":"7575757575"},
      { "name": "john", "email": "john@gmail.com","mobileno":"7575757575"},
      { "name": "gokul", "email": "gokul@gmail.com","mobileno":"7575757575"},
      { "name": "steve", "email": "steve@gmail.com","mobileno":"7575757575"},
      { "name": "kumar", "email": "kumar@gmail.com","mobileno":"7575757575"},
      { "name": "roy", "email": "roy@gmail.com","mobileno":"7575757575"},
      { "name": "sam", "email": "sam@gmail.com","mobileno":"7575757575"},
      { "name": "guru", "email": "guru@gmail.com","mobileno":"7575757575"},
    ]

  constructor(private router:Router,private service:DataService) { }

  ngOnInit(): void {
  }


  viewProfile(data){
    this.service.getProfile(data)
    this.router.navigate(['profile'])
  }


}
