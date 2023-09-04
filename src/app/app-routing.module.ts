import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionpartComponent } from './predictionpart/predictionpart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard Page'
    }
  },
  {
    path: 'prediction',
    component: PredictionpartComponent,
    data: {
      title: 'Prediction page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
