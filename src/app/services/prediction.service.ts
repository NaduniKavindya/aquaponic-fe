import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private readonly baseUrl;

 
  constructor(private http : HttpClient ) { 
    this.baseUrl = environment.baseURL;
  }


 
    getPrediction(request: FormData): Observable<any[]> {
      return this.http.post<any>(`${this.baseUrl}`, request);
    }
  
}
