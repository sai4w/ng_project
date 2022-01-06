import { TestBed } from '@angular/core/testing';

import { SkinGuard } from './skin.guard';

describe('SkinGuard', () => {
  let guard: SkinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
