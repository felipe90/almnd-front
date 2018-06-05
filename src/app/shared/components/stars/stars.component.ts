import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input () public itemsNumber: Number;

  constructor() { }

  ngOnInit() {
  }

  public getIterableArray(num) {
    return new Array(parseInt(num, 10));
  }
}
