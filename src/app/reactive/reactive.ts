import { Component, OnInit } from '@angular/core';
import { ContactService } from "../services/contact.service";

@Component({
    selector: 'reactive',
    template: require('./reactive.html')
})

export class ReactiveComponent implements OnInit {
    
    person: any = {};
    games: any = [];
    constructor(private _contactService: ContactService) { }

    ngOnInit() {
        this.person = {
            name: 'javier',
            lastName: 'rodriguez',
            gitHubTag: 'hazelapd',
            currentDate: new Date(),
            anualPrice: 150
        };   
    }

    getMyGames(){
        this._contactService
            .getGames()
            .subscribe(resp => this.games = resp,
                       error => console.log(error)
            );
    }

    pickGame(game: any){
        alert(`Game: ${game.name} - 
        Console: ${game.platform}`);
    }

}