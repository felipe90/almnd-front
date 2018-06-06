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

  public starsFilterNumber: Number = null;
  public nameFilterValue: String = null;

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
    const _filters: any = {};
    _filters.name = this.nameFilterValue;
    _filters.stars = this.starsFilterNumber;
    return _filters;
  }

}
