import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppPageComponent } from './supp-page.component';

describe('SuppPageComponent', () => {
  let component: SuppPageComponent;
  let fixture: ComponentFixture<SuppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
