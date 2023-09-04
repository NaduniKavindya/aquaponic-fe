import { Component, OnInit } from '@angular/core';
import { SharedService } from '../modal/shared-service';

@Component({
  selector: 'app-predictionpart',
  templateUrl: './predictionpart.component.html',
  styleUrls: ['./predictionpart.component.css']
})
export class PredictionpartComponent implements OnInit {

  resultDisplay: any ;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getSharedPredictionMessage();
  }


  getSharedPredictionMessage(){
    this.sharedService.getPredictionMessage()
      .subscribe(result => {
          console.log(result);
          this.resultDisplay = result;
         
        },
        error => {
          console.warn('failed to get data', error);
        });
  }

}
