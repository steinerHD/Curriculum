import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomponentComponent } from './upcomponent.component';

describe('UpcomponentComponent', () => {
  let component: UpcomponentComponent;
  let fixture: ComponentFixture<UpcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
