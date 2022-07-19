import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpItemComponent } from './emp-item.component';

describe('EmpItemComponent', () => {
  let component: EmpItemComponent;
  let fixture: ComponentFixture<EmpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
