import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentercomponentComponent } from './centercomponent.component';

describe('CentercomponentComponent', () => {
  let component: CentercomponentComponent;
  let fixture: ComponentFixture<CentercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
