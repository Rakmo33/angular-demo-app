import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/form/services/utility.service';

@Injectable(
 
)
export class UserDataService {

  constructor(private utilityService: UtilityService) { }

  getTitle2(caller: string){
    console.log("GetTitle2 called by: "+ caller);
    return this.utilityService.getTitle("UDS");
  }
}
