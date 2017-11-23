import { Component, OnInit } from '@angular/core';
import { CommService } from "../../services/comm.service";

@Component({
    selector: 'comp-one',
    template: require('./comp-one.html')
})

export class OneComponent implements OnInit {

    inputOne: string
    constructor(private _comm: CommService) {
        this._comm
        .getEventManager()
        .subscribe(element => this.inputOne = element);
    }

    ngOnInit() { }

    sendEvent(){
        console.log(this.inputOne);
        this._comm.setEventManager(this.inputOne);
    }
}