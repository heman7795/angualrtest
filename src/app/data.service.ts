import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
profileData:any
  constructor() { }

  getProfile(data){
    this.profileData=data
  }
}
