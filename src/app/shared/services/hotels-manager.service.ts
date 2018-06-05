import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class HotelsManagerService {

  public onChangeFilters = new EventEmitter();
  private hotelsFilters: any;


  constructor() {
    this.onChangeFilters.subscribe((res) => {
      this.setHotelsFilters(res);
    });
  }


  public setHotelsFilters(value: any) {
    this.hotelsFilters = value;
  }

  public getHotelsFilters(): any {
    return this.hotelsFilters;
  }

}
