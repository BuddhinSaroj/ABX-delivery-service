import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpackComponent } from './searchpack.component';

describe('SearchpackComponent', () => {
  let component: SearchpackComponent;
  let fixture: ComponentFixture<SearchpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
