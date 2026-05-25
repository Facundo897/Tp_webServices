import { Routes } from '@angular/router';
import { PuntoA } from './components/punto-a/punto-a';
import { PuntoB } from './components/punto-b/punto-b';
import { PuntoC } from './components/punto-c/punto-c';
import { PuntoD } from './components/punto-d/punto-d';
import { PuntoE } from './components/punto-e/punto-e';

export const routes: Routes = [
    {path:"punto-a", component: PuntoA},
    {path:"punto-b", component: PuntoB},
    {path:"punto-c",component: PuntoC},
    {path:"punto-d", component: PuntoD},
    {path:"punto-e", component: PuntoE}
];
