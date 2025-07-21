import { Component, OnInit } from '@angular/core';
import { UtilityService } from './form/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {

  title = this.utilityService.getTitle("app.comp");
  constructor(private utilityService: UtilityService,
    ){
    console.log("constructor start");
    this.myFunc(1);
    console.log("constructor end");      
    }

  ngOnInit() {
    console.log("ngOnInit start");
  }

  navigate(pageId: any) {
    // Use the View Transition API for smooth switching
    (document as any).startViewTransition(() => {
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(pageId)?.classList.add('active');
      document.getElementById(pageId)?.classList.add('move');
    });
  }

  myFunc = async (num: number) => {
    console.log("myFunc start " + num);
    const res = await new Promise<string>((resolve, reject)=> {
      setTimeout(() => {
        console.log("---Timeout---");
        resolve("done");
      }, 100 * num);
    }) 
    console.log("myFunc end " + num);
    return res;
  }
  
  // title = this.uds.getTitle2("app.comp");
}
