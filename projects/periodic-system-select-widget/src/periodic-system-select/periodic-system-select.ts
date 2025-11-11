import { Component } from '@angular/core';
import { PeriodicSystemModule, PsService } from 'periodic-system-common';
import { PeriodicSystemSelectService } from './periodic-system-select.service';

@Component({
  selector: 'app-periodic-system-select',
  template: '<lib-ps-table></lib-ps-table>',
  imports: [PeriodicSystemModule],
  providers: [
    {
      provide: PsService,
      useClass: PeriodicSystemSelectService,
    },
  ],
})
export class PeriodicSystemSelect {}
