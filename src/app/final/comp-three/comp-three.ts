import { Component, OnInit } from '@angular/core';
import { CommService } from "../../services/comm.service";

@Component({
    selector: 'comp-three',
    template: require('./comp-three.html')
})

export class ThreeComponent implements OnInit {

    inputThree: string;
    constructor(private _comm: CommService) { 
        this._comm
            .getEventFromOne()
            .subscribe(x => this.inputThree = x);
    }

    ngOnInit() { }

    sendEvent(){
        console.log(this.inputThree);
        this._comm.setEventFromOne(this.inputThree);
    }
}