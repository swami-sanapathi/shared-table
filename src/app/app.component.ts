import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <div class="router-outlet-container">
            <div class="router-outlet-header">
                <button>Default</button>
                <button>Custom Header</button>
                <button>Custom Header and Data</button>
            </div>
            <router-outlet />
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
    `,
})
export class AppComponent {}
