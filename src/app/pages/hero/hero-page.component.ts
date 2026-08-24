import { Component, computed, signal } from "@angular/core";

@Component({
    selector: 'selector-name',
    templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {

    name = signal('Ironman')
    age = signal(45)
    // title = signal('hola mundo')


    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    // capitalizadName = computed(() => {
    //     const capitalizad = `${ this.title() }`
    //     return capitalizad.charAt(0).toUpperCase() + capitalizad.slice(1).toLocaleLowerCase();
    // }) mi forma de capitalizar

    capitalizadName = computed(() => this.name().toUpperCase()) // ejemplo curso


    changeHero() {
        this.name.set('Spiderman')
        this.age.set(22)
    }

    changeAge() {
        this.age.set(60)
    }

    resetForm() {
        this.name.set('IronMan')
        this.age.set(45)
    }
}