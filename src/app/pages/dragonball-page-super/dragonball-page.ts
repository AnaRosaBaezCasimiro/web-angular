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

})
export class DragonballPage {

  name = signal('Gohan')
  power = signal(100)
  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 3, name: 'Piccolo', power: 4001 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }


    const newCharacter: Characters = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((list: Characters[]) => [...list, newCharacter]);

    this.resetFields();

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
