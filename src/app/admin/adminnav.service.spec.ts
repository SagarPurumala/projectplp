import { TestBed } from '@angular/core/testing';

import { AdminnavService } from './adminnav.service';

describe('AdminnavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminnavService = TestBed.get(AdminnavService);
    expect(service).toBeTruthy();
  });
});
