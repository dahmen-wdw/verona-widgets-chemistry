import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsSelectAlert } from './ps-select-alert';

describe('PsSelectAlert', () => {
  let component: PsSelectAlert;
  let fixture: ComponentFixture<PsSelectAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsSelectAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsSelectAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
