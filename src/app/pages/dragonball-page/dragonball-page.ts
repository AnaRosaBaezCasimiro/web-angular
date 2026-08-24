import { Component, signal } from '@angular/core';

interface Characters {
  id: number,
  name: string,
  power: number,
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  // styleUrl: './dragonball-page.css',
})
export class DragonballPage {

  name = signal('')
  power = signal(0)
  characters = signal<Characters[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8001},
    {id: 4, name: 'Yamcha', power: 500},
    {id: 3, name: 'Piccolo', power: 4001},
  ]);

  addCharacter() {
    console.log(this.name, this.power)
  }
}
