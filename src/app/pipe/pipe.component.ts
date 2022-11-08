import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  myDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

   name='angular react javascript ';

   lower='ANGULAR';

   salary=67000;

   person1={
    'name':"xyz",
    'age':26,
    'salary':68000
   }

   dob = new Date();

   num =0.98;

   company ="micrsoft"

}
