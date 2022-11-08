import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  data: any;

  constructor() {

  }

  ngOnInit(): void {

    this.data = this.getData();

  }


  pizzaList: string[] = ['margherita', 'Farm House', 'pepy paneer', 'green wave', 'cheese n corn', 'chessbrug']

  title = 'toolsets';
  parentSelector: boolean = false;
  food = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: true, name: 'burger' },
    { id: 3, select: true, name: 'sandwich' },
  ];

  onChangeFood($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.food = this.food.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    console.log(this.food);
  }




  table = 'Table';
  getData() {
    return [
      {
        "productId": 1,
        "productName": "jeeb",
        "productCode": "March 19,2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
      },
      {
        "productId": 2,
        "productName": "cycle",
        "productCode": "March 19,2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
      },
      {
        "productId": 3,
        "productName": "car",
        "productCode": "March 19,2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
      },
      {
        "productId": 4,
        "productName": "bike",
        "productCode": "March 19,2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
      },
      {
        "productId": 5,
        "productName": "bus",
        "productCode": "March 19,2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
      },
    ]
  }


  titleName = 'two way binding';
  name: any;



}





