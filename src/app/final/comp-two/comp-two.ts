import { Component, OnInit } from '@angular/core';
import { CommService } from "../../services/comm.service";

@Component({
    selector: 'comp-two',
    template: require('./comp-two.html')
})

export class TwoComponent implements OnInit {

    inputTwo: string;
    constructor(private _comm: CommService) {
        this._comm
        .getEventManager()
        .subscribe(element => this.inputTwo = element);
    }

    ngOnInit() { }

    sendEvent(){
        console.log(this.inputTwo);
        this._comm.setEventManager(this.inputTwo);
    }
}