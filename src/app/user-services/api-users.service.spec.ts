/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiUsersService } from './api-users.service';

describe('Service: ApiUsers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUsersService]
    });
  });

  it('should ...', inject([ApiUsersService], (service: ApiUsersService) => {
    expect(service).toBeTruthy();
  }));
});
