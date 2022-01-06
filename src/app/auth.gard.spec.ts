import { TestBed } from '@angular/core/testing';

import { AuthGard } from './auth.gard';

describe('AuthGard', () => {
  let guard: AuthGard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});