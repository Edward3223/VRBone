import { TestBed } from '@angular/core/testing';

import { InfotrasportService } from './infotrasport.service';

describe('InfotrasportService', () => {
  let service: InfotrasportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfotrasportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
