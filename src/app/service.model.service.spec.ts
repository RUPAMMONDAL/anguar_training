import { TestBed } from '@angular/core/testing';

import { Service.ModelService } from './service.model.service';

describe('Service.ModelService', () => {
  let service: Service.ModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service.ModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
