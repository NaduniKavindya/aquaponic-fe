import { Component, OnInit } from '@angular/core';
import { SharedService } from '../modal/shared-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   inputComodityValue: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  getCommodityValue($event: any) {
    this.inputComodityValue = $event.target.value;
    this.sharedService.setPredictionMessage(this.inputComodityValue);
    }

}
