import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss']
})
export class ProfileviewComponent implements OnInit {
profile:any
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.profile = this.service.profileData
  }

}
