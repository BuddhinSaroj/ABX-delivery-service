import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepackageComponent } from './storepackage.component';

describe('StorepackageComponent', () => {
  let component: StorepackageComponent;
  let fixture: ComponentFixture<StorepackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorepackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
