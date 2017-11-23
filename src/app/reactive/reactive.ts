import { Component, OnInit } from '@angular/core';
import { ReactiveService } from '../services/reactive.service';
import { Game } from "../model/games";

@Component({
    selector: 'reactive',
    template: require('./reactive.html'),
    styles: [`
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    
    tr:hover {background-color:#f5f5f5;}`]
})

export class ReactiveComponent implements OnInit {

    person: any = {};
    games: Game[] = [];
    constructor(private _reactiveService: ReactiveService) { }

    ngOnInit() {
        this.person = {
            name: 'javier',
            lastName: 'rodriguez',
            gitHubTag: 'hazelapd',
            currentDate: new Date(),
            anualPrice: 150.0
        }
    }

    getMyGames(){
        this._reactiveService
            .getMyGames()
            .subscribe(resp => {
                this.games = resp
            },
            error => console.log(error));
    }

    pickGame(game: Game){
        alert(`${game.name} == with console == ${game.platform}`);
    }
}