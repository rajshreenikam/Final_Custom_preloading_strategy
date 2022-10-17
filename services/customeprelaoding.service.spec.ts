import { TestBed } from '@angular/core/testing';

import { CustomeprelaodingService } from './customeprelaoding.service';

describe('CustomeprelaodingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomeprelaodingService = TestBed.get(CustomeprelaodingService);
    expect(service).toBeTruthy();
  });
});
