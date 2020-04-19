import { HttpModule, HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';

import { EventsService } from './events.service';
import { createAxiosResponse } from '../../test-helpers/http-service';

describe('EventsService', () => {
  let http: HttpService;
  let service: EventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [EventsService],
    }).compile();

    http = module.get<HttpService>(HttpService);
    service = module.get<EventsService>(EventsService);
  });

  it('should return an array of events', (done) => {
    const expected = ['event'];
    const response = createAxiosResponse(expected);
    jest.spyOn(http, 'get').mockImplementationOnce(() => of(response));
    service.list().subscribe(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });
});
