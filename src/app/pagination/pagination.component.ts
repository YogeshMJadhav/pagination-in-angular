import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent  {
  title = 'Pagination';
  // Some array of things.
  public employeedata = [];
  // Pagination parameters.
  public p: number = 1;
  public count: number = 1;
  constructor() {
    axios.get(' http://localhost:3000/pagination').then((res)=>{
      console.log("New Emplyeee Data", res.data);
      this.employeedata = res.data;
    })
  }; 
}
