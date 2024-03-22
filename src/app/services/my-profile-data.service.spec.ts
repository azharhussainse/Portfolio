import { TestBed } from '@angular/core/testing';

import { MyProfileDataService } from './my-profile-data.service';

describe('MyProfileDataService', () => {
  let service: MyProfileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProfileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
