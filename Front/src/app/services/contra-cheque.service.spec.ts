import { TestBed } from '@angular/core/testing';

import { ContraChequeService } from './contra-cheque.service';

describe('ContraChequeService', () => {
  let service: ContraChequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContraChequeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
