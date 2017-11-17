import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class ContactService {

    constructor() { }

    getSupportAgent(){
        return {
            agent: '456',
            name: 'Julio'
        }
    }

    getAvailableAgents() {
        return Observable.create(observer => {

            let availableAgents: string[] = ['Robert', 'Javier', 'Julian'];

            availableAgents.forEach(agent => {
                observer.next(agent);
            });
            observer.complete();
        });
    }
}