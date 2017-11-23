import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class CommService {

    private eventManager = new Subject<any>();

    constructor() { }

    setEventManager(value: string){
        this.eventManager.next(value);
    }

    getEventManager(){
        return this.eventManager.asObservable();
    }
}