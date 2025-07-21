import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getTitle(caller : string){
    console.log("US called by: "+caller);
    return "Omkar";
  }
}
