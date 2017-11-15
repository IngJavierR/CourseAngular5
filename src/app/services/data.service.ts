import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

    private message = new Subject<string>();
    private isLoading = new Subject<boolean>();

    getMessage() {
        return this.message.asObservable();
    }

    setMessage(msg: string){
        this.message.next(msg);
    }

    getIsLoadingEvent(){
        return this.isLoading.asObservable();
    }

    setIsLoadingEvent(isLoading: boolean){
        this.isLoading.next(isLoading);
    }
}
