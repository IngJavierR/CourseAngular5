import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [`
    button {
      width: 200px;
    }
  `]
})
export class MainComponent implements OnInit{

  nombre: string = 'Javier';
  isVisible: boolean = false;
  heroes: any = [];

  constructor(){

  }

  ngOnInit(){
    this.heroes.push({
      name: 'IronMan',
      color: 'red'
    });
    this.heroes.push({
      name: 'Capitan America',
      color: 'blue'
    });
    this.heroes.push({
      name: 'Hulk',
      color: 'green'
    });
    console.log(this.heroes);
  }

  handlerEventClick(event){
    console.log(event);
    this.heroes.push('')
  }

  toggleVisibility(){
      this.isVisible = !this.isVisible;
  }

}
