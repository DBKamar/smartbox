import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Database, ref, onValue } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-status-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-container">
      <h1>Smartbox Status</h1>
      <h2>Realtime Letterbox Status</h2>
      <div *ngIf="status$ | async as status; else loading">
        <div class="status-item">
          <p><strong>Weight:</strong> {{ status.weight || 0 }} g</p>
        </div>
        <div class="status-item">
          <p><strong>Mail Detected:</strong> {{ status.mailDetected ? 'Yes' : 'No' }}</p>
        </div>
        <div class="status-item">
          <p><strong>Door Opened:</strong> {{ status.doorOpened ? 'Yes' : 'No' }}</p>
        </div>
        <div class="status-item">
          <p><strong>Movement Detected:</strong> {{ status.movementDetected ? 'Yes' : 'No' }}</p>
        </div>
      </div>
      <ng-template #loading>
        <p>Loading...</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .status-container {
        max-width: 600px;
        margin: 2rem auto;
        font-family: Arial, sans-serif;
        text-align: center;
        color: #333;
      }
      h1 {
        font-size: 2rem;
        color: #4a90e2;
      }
      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #6c757d;
      }
      .status-item {
        margin: 1rem 0;
        font-size: 1.2rem;
      }
      p {
        margin: 0.5rem 0;
      }
    `,
  ],
})
export class StatusDisplayComponent {
  private statusSubject = new BehaviorSubject<any | null>(null);
  status$: Observable<any> = this.statusSubject.asObservable();

  constructor(private database: Database) {
    const statusRef = ref(this.database, 'letterbox/status');

    onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      this.statusSubject.next(data);
    });
  }
}
