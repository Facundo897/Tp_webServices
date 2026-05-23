import { Routes } from '@angular/router';
import { PuntoA } from './components/punto-a/punto-a';
import { PuntoB } from './components/punto-b/punto-b';

export const routes: Routes = [
    {path:"punto-a", component: PuntoA},
    {path:"punto-b", component: PuntoB}
];
