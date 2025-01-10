import { Component } from '@angular/core';
import { StatusDisplayComponent } from './components/status-display/status-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatusDisplayComponent],
  template: `
    <div>
      <h1>Smartbox Status</h1>
      <app-status-display></app-status-display>
    </div>
  `,
})
export class AppComponent {}
