import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Event } from './event';

@Injectable()
export class EventsService {
  constructor(private http: HttpService) {}

  list(): Observable<Event[]> {
    return this.http.get<Event[]>('events')
      .pipe(
        map(response => response.data.map(Event.decode))
      );
  }
}
