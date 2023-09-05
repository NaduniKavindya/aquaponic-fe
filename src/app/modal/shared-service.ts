import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class SharedService {

    public messageSubject = new BehaviorSubject<string>("");


    constructor() {
    }

    public setPredictionMessage(value :any){
        this.messageSubject.next(value);
    }
    /**
     * getPredictionMessage
     */
    public getPredictionMessage(): Observable<any>  {
        return this.messageSubject.asObservable()
    }

}
