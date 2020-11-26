import { TestBed } from '@angular/core/testing';

import { BackConnectorService } from './back-connector.service';

describe('BackConnectorService', () => {
  let service: BackConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
