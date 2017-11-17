import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { log } from 'util';

@Component({
    selector: 'contact',
    template: require('./contact.html')
})

export class ContactComponent implements OnInit {
    
    agent: any;
    availableAgents: string[] = [];
    constructor(private _contactService: ContactService) { }

    ngOnInit() {
        this.agent = this._contactService.getSupportAgent();
    }

    getAvailableAgents(){
        this._contactService
            .getAvailableAgents()
            .subscribe(value => {this.availableAgents.push(value)},
                      error => console.log(error),
                      () => console.log('complete'));
    }
}