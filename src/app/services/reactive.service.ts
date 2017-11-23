import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../model/games";

@Injectable()
export class ReactiveService {

    private _baseUrl: string = 'http://localhost:8080'
    constructor(private _http: HttpClient) { }

    getMyGames(){
        let uri = '/games'
        return this.sendGet<Game[]>(uri);
    }

    sendGet<T>(uri: string) : Observable<T>{
        let url = `${this._baseUrl}${uri}`
        return this._http
                .get<T>(url, {responseType: 'json'})
                .retry(2)
                .catch(this.handleError);
    }

    handleError(error: any){
        console.log(error);
        return Observable.throw(error || 'Server error');
    }
}