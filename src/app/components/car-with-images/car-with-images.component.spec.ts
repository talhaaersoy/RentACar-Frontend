import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWithImagesComponent } from './car-with-images.component';

describe('CarWithImagesComponent', () => {
  let component: CarWithImagesComponent;
  let fixture: ComponentFixture<CarWithImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarWithImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarWithImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
