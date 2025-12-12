import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsElementFocusDirective } from './ps-element-focus';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideTestPsService } from '../ps-table/ps-table.spec';
import { PsElements } from '../../data/PsData';

describe('PsElementFocus', () => {
  let component: PsElementFocusDirective;
  let fixture: ComponentFixture<PsElementFocusDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsElementFocusDirective],
      providers: [provideZonelessChangeDetection(), provideTestPsService()],
    }).compileComponents();

    fixture = TestBed.createComponent(PsElementFocusDirective);
    fixture.componentRef.setInput('element', PsElements[0]);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
