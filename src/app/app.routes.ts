import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPage } from './pages/dragonball-page/dragonball-page'
import { DragonballSuperPage } from './pages/dragonball-page-super/dragonball-super-page';

export const routes: Routes = [

    {
        path: '',
        component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent,
    },
    {
        path: 'dragonball',
        component: DragonballPage,
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPage,
    }
];
