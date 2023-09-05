import { Component, OnInit } from '@angular/core';
import { SharedService } from '../modal/shared-service';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  inputComodityValue: any;
  predictionForm!: FormGroup;

  constructor(private sharedService: SharedService, private route: Router) {}

  ngOnInit(): void {
    this.predictionForm = new FormGroup({
      commodity: new FormControl(null, [
        Validators.required,
        this.noWhitespaceValidator
      ]),
    });
  }

  submitPredictionMessage() {
    let commodity = this.predictionForm.get('commodity')!.value;
    this.sharedService.setPredictionMessage(commodity);
    console.log(commodity);

    this.route.navigateByUrl('/prediction');
  }

  noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length ? null : { whitespace: true };
  }
}
