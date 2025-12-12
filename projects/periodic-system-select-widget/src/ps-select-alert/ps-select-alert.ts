import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-ps-select-alert',
  imports: [MatIcon],
  template: `
    <div role="alert" class="alert-container">
      <div class="alert-sidebar">
        <mat-icon>feedback</mat-icon>
      </div>
      <div class="alert-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
    .alert-container {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
      justify-content: stretch;
    }

    .alert-sidebar {
      padding: 0 0.5rem;
      background-color: #00b2ff;
      align-content: center;
    }

    .alert-content {
      background-color: #88ddff;
      align-content: center;
      padding: 0 0.5rem;
      white-space: wrap;
      overflow: hidden;
      flex-grow: 1;
    }
  `,
})
export class PsSelectAlert {}
