import { HttpModule, HttpService } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { Event } from './event';
import { EventsService } from './events.service';

import { createAxiosResponse } from '../../test-helpers/http-service';

describe('EventsService', () => {
  let http: HttpService;
  let service: EventsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [EventsService],
    }).compile();

    http = module.get<HttpService>(HttpService);
    service = module.get<EventsService>(EventsService);
  });

  it('should return an array of events', (done) => {
    const fixture = require('./fixtures/meetup.events.json');
    const response = createAxiosResponse(fixture);
    jest.spyOn(http, 'get').mockImplementationOnce(() => of(response));

    const expected = fixture.map(Event.decode);
    service.list().subscribe(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });
});
