import { HttpModule } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { of } from 'rxjs';

import { EventsService } from './events.service';
import { EventsController } from './events.controller';

describe('EventsController', () => {
  let service: EventsService;
  let controller: EventsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [EventsController],
      providers: [EventsService],
    }).compile();

    service = module.get<EventsService>(EventsService);
    controller = module.get<EventsController>(EventsController);
  });

  it('should return an array of events', (done) => {
    const expected = require('./fixtures/events');
    jest.spyOn(service, 'list').mockImplementationOnce(() => of(expected));

    controller.list().subscribe(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });

  it('should return an event', (done) => {
    const expected = require('./fixtures/events')[0];
    jest.spyOn(service, 'get').mockImplementationOnce(() => of(expected));

    controller.get(1).subscribe(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });
});
