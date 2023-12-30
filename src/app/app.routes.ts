import { Routes } from '@angular/router';

export default [
    {
        path: 'table',
        loadComponent: () => import('./shared-table/shared-table.component'),
    },
    {
        path: '**',
        redirectTo: 'table',
        pathMatch: 'full',
    },
] as Routes;
