import { TestBed } from '@angular/core/testing';

import { CarWithImagesService } from './car-with-images.service';

describe('CarWithImagesService', () => {
  let service: CarWithImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarWithImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
