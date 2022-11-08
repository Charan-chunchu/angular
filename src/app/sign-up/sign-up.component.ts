import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

 constructor(
    public ServiceService: ServiceService
  ) { }

  ngOnInit(): void {
  }

}
