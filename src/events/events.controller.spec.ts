import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';

import { EventsService } from './events.service';
import { EventsController } from './events.controller';

describe('EventsController', () => {
  let service: EventsService;
  let controller: EventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [EventsController],
      providers: [EventsService],
    }).compile();

    service = module.get<EventsService>(EventsService);
    controller = module.get<EventsController>(EventsController);
  });

  it('should return an array of events', (done) => {
    const expected = ['event'];
    jest.spyOn(service, 'list').mockImplementationOnce(() => of(expected));
    controller.list().subscribe(actual => {
      expect(actual).toEqual(expected);
      done();
    });
  });
});
