import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/user/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private uds : UserDataService) { }

  ngOnInit(): void {

    this.uds.getTitle2("Form Comp")
  }

  

}
