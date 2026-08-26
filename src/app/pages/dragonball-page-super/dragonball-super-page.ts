import { Component, signal } from '@angular/core';
import { CharacterList } from '../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface'


@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList],
  templateUrl: './dragonball-super-page.html',

})
export class DragonballSuperPage {

  name = signal('')
  power = signal(0)
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8001 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }


    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((list: Character[]) => [...list, newCharacter]);

    this.resetFields();

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
