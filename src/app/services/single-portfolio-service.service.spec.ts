import { TestBed } from '@angular/core/testing';

import { SinglePortfolioServiceService } from './single-portfolio-service.service';

describe('SinglePortfolioServiceService', () => {
  let service: SinglePortfolioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePortfolioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
