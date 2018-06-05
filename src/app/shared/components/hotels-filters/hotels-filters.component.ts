import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';
import { HotelsManagerService } from '../../services/hotels-manager.service';

@Component({
  selector: 'app-hotels-filters',
  templateUrl: './hotels-filters.component.html',
  styleUrls: ['./hotels-filters.component.css']
})
export class HotelsFiltersComponent implements OnInit {

  @Output() public onSelectFilters = new EventEmitter();

  public starsFilterNumber = 5;
  public nameFilterValue: String;

  constructor(
    private hotelsManagerService: HotelsManagerService
  ) { }

  ngOnInit() {
  }

  public onSelectNameValue() {
    this.hotelsManagerService.onChangeFilters.emit(this.getFilters());
  }

  public onSelectStarsValue() {
    this.hotelsManagerService.onChangeFilters.emit(this.getFilters());
  }

  public getFilters(): any {
    return {name : this.nameFilterValue || null , stars: this.starsFilterNumber || null};
  }

}
