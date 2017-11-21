import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ReactiveService {

    private _baseUrl: string = 'http://localhost:8080'
    constructor(private _http: HttpClient) { }

    getMyGames(){
        let uri = '/games'
        return this.sendGet(uri);
    }

    sendGet(uri: string){
        let url = `${this._baseUrl}${uri}`
        return this._http
                .get(url, {responseType: 'json'})
                .retry(2)
                .catch(this.handleError);
    }

    handleError(error: any){
        console.log(error);
        return Observable.throw(error || 'Server error');
    }
}