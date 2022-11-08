import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../get-api.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  title = ' Api Call in Angular';
  data:any
  constructor(
    private api:GetApiService
  ) { }

  ngOnInit(): void {
    this.api.apiCall(). subscribe((data)=>{
      this.data=data
    })
  }


}
