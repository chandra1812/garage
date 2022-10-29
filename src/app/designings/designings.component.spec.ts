import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigningsComponent } from './designings.component';

describe('DesigningsComponent', () => {
  let component: DesigningsComponent;
  let fixture: ComponentFixture<DesigningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesigningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesigningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
