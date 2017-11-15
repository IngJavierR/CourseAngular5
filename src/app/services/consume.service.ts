import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ConsumeService {

    private _url: string = 'http://api.icndb.mx/jokes/random';
    constructor(private _http: HttpClient) {}

    getJoke() {
        return this._http
            .get(this._url, {responseType: 'json'})
            .retryWhen(errors => {
                return errors
                    .mergeMap((error) => {
                        return (error.status === 0) ? 
                            Observable.throw(error) : 
                            Observable.of(error)
                    })
                    .delay(5000)
                    .take(2);
            })
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
