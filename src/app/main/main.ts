import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main',
  template: require('./main.html'),
  styles: [`
    .green {
      color: green;
    }
    .red {
      color: red;
    }
  `]
})
export class MainComponent implements OnInit{

  showElement: boolean;
  heroes: any = [];
  isGreen: boolean;
  constructor(){}

  ngOnInit(){

    this.showElement = false;
    this.heroes.push({
      nombre: 'Javier',
      ide: 'VSCode'
    });
    this.heroes.push({
      nombre: 'Guille',
      ide: 'Atom'
    });
    this.heroes.push({
      nombre: 'Rafa',
      ide: 'Vim'
    });

    
  }

  changeState(){
    this.isGreen = !this.isGreen;
  }

  handlerEventClick(event){
    console.log(`From Main: ${event}`);    
  }
}
