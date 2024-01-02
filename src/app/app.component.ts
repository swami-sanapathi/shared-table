import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, ButtonModule],
    template: `
        <div class="router-outlet-container">
            @defer (on idle) {
                <div class="router-outlet-header">
                    <p-button [routerLink]="['/default']" routerLinkActive="active" label="Default"></p-button>
                </div>
                <div class="display-table">
                    <router-outlet />
                </div>
            }
        </div>
    `,
    styles: `
    .router-outlet-container {
        margin: 40px;
        radius: 30px;
        background-color: #f5f5f5;
        padding: 20px;
        }
      button {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: #f8f8f8;
        cursor: pointer;
        font-size: 16px;
      }
    .display-table {
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        background-color: #f8f8f8;
        }
    `,
})
export class AppComponent {}
