import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class CommService {

    private eventFromOne = new Subject<any>();
    constructor() { }

    setEventFromOne(value: string){
        this.eventFromOne.next(value);
    }

    getEventFromOne(){
        return this.eventFromOne.asObservable();
    }
}