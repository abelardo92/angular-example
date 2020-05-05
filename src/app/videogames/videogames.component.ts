import { Component } from '@angular/core';

@Component({
    selector: 'videogames',
    templateUrl: './videogames.component.html' 
})
export class VideogamesComponent{
    public name = 'videogames';
    public best_game = 'zelda';
    public best_retro_game = 'mario';
    public show_retro_game = false;
    public color = 'yellow';
    public videogames = [
        'metroid', 'mario', 'pokemon', 'the witcher'
    ]
}