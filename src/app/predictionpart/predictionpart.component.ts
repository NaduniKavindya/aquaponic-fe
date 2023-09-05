import { Component, OnInit } from '@angular/core';
import { SharedService } from '../modal/shared-service';
import { PredictionService } from '../services/prediction.service';
import { PredictionModalRequest } from '../modal/prediction-modal';

@Component({
  selector: 'app-predictionpart',
  templateUrl: './predictionpart.component.html',
  styleUrls: ['./predictionpart.component.css'],
})
export class PredictionpartComponent implements OnInit {
  resultDisplay!: string;

  constructor(
    private sharedService: SharedService,
    private predictionService: PredictionService
  ) {}

  ngOnInit(): void {
    const result = this.getSharedPredictionMessage();
    if (this.resultDisplay.trim().length !== 0) {
      this.predictionAPI(this.resultDisplay);
    }
  }

  getSharedPredictionMessage(): any {
    this.sharedService.getPredictionMessage().subscribe(
      (result) => {
        console.log('resulq' + result);
        this.resultDisplay = result;
      },
      (error) => {
        console.warn('failed to get data', error);
      }
    );
  }

  predictionAPI(predictionString: string) {
    let prediction = new PredictionModalRequest();
    prediction.Comodity = predictionString;

    this.predictionService.getPrediction(prediction).subscribe(
      (result) => {
        console.log('Prediction' + result);
        this.resultDisplay = result['decision'];
      },
      (error) => {
        console.warn('failed to get data', error);
      }
    );
  }
}
