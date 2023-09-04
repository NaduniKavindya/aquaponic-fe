import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class SharedService {

    public messageSubject = new Subject();


    constructor() {
    }

    public setPredictionMessage(value :any){
        this.messageSubject = value;
    }
    /**
     * getPredictionMessage
     */
    public getPredictionMessage(): Observable<any>  {
        return this.messageSubject.asObservable()
    }

}
