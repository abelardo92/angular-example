import { Component } from '@angular/core';

@Component({
    selector: 'videogames',
    template: `
    <h2>{{name}} component</h2>
    <h2 *ngIf='!show_retro_game'>best game: {{best_game}}</h2>
    <h2 [style.background]='color' *ngIf='show_retro_game'>best retro game: {{best_retro_game}}</h2>
    `
})
export class VideogamesComponent{
    public name = 'videogames';
    public best_game = 'zelda';
    public best_retro_game = 'mario';
    public show_retro_game = false;
    public color = 'yellow';
}