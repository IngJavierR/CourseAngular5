import {Component} from '@angular/core';

@Component({
  selector: 'main',
  template: require('./main.html')
})
export class MainComponent {

  constructor(){}

  handlerEventClick(event){
    console.log(`From Main: ${event}`);    
  }
}
