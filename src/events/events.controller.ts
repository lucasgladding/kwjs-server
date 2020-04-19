import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';
import { Observable } from 'rxjs';

@Controller('events')
export class EventsController {
  constructor(private service: EventsService) {}

  @Get()
  list(): Observable<string[]> {
    return this.service.list();
  }
}
