import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignpackageComponent } from './assignpackage.component';

describe('AssignpackageComponent', () => {
  let component: AssignpackageComponent;
  let fixture: ComponentFixture<AssignpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignpackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
