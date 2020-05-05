import { Component } from '@angular/core';

@Component({
    selector: 'videogames',
    templateUrl: './videogames.component.html' 
})
export class VideogamesComponent{
    public name:string;
    public best_game:string;
    public best_retro_game:string;
    public show_retro_game:boolean;
    public color:string;
    public year:number;
    public videogames:Array<String>;

    constructor() {
        this.name = 'videogames';
        this.best_game = 'zelda';
        this.best_retro_game = 'mario';
        this.show_retro_game = false;
        this.color = 'yellow';
        this.year = 2020;
        this.videogames = [
            'metroid', 'mario', 'pokemon', 'the witcher'
        ];
    }

}