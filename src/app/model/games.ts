export class Game {

    name: string;
    platform: string;

    constructor(game: any){
        this.name = game.name;
        this.platform = game.platform;
    }
}