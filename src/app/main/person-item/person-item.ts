import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'person-item',
    template: require('./person-item.html'),
    styles: [`
        div {
            font-size: 20px;
        }
        :host {
            border: 2px solid red;
        }
    `]
})

export class PersonItem implements OnInit{

    @Input() id:any;
    @Output() eventClick = new EventEmitter();

    person: any = {};

    constructor() {
        /*this.person = {
            id: this.id,
            name: 'Javier',
            side: 'The Force - Light Side'
        }*/
    }

    ngOnInit(){
        this.person = {
            id: this.id,
            name: 'Javier',
            side: 'The Force - Light Side'
        }
    }

    clickEvent(){
        console.log('Click!');
        this.eventClick.emit('Click!');
    }

    fromTemplateVariable(){
        console.log('From template variable');
    }
}