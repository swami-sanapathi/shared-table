import { Component } from '@angular/core';
import { SharedTableComponent } from '../table/table.component';

@Component({
    selector: 'app-shared',
    template: ` <app-table /> `,
    standalone: true,
    imports: [SharedTableComponent],
})
export default class SharedComponent {}
