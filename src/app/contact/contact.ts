import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { log } from 'util';

@Component({
    selector: 'contact',
    template: require('./contact.html')
})

export class ContactComponent implements OnInit {
    
    constructor(private _contactService: ContactService) { 
        
    }

    ngOnInit() {
        let agents = this._contactService.getSupportAgent();
        console.log(agents);
    }

    getAvailableAgents(){
        this._contactService
            .getAvailableAgents()
            .subscribe(
                value => console.log(value),
                error => console.log(error),
                () => console.log('Complete')
            );
    }
}