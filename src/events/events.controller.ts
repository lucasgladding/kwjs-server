import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Event } from './event';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private service: EventsService) {}

  @Get()
  list(): Observable<Event[]> {
    return this.service.list();
  }
}
