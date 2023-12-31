import { Routes } from '@angular/router';

export default [
    {
        path: 'default',
        loadComponent: () => import('./shared/shared.component'),
    },
    {
        path: '**',
        redirectTo: 'default',
        pathMatch: 'full',
    },
] as Routes;
