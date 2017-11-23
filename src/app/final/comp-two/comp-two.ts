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
        .getEventFromOne()
        .subscribe(x => this.inputTwo = x);
    }

    ngOnInit() { }

    sendEvent(){
        console.log(this.inputTwo);
        this._comm.setEventFromOne(this.inputTwo);
    }
}