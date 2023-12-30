import { Routes } from '@angular/router';

export default [
    {
        path: 'table',
        loadComponent: () => import('./shared/shared.component'),
    },
    {
        path: '**',
        redirectTo: 'table',
        pathMatch: 'full',
    },
] as Routes;
