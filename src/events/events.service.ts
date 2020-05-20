import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Event } from './event';

@Injectable()
export class EventsService {
  constructor(private http: HttpService) {}

  list(): Observable<Event[]> {
    return this.http.get<Event[]>('events', {
      params: {
        fields: 'plain_text_description',
        status: 'past,upcoming',
        desc: true,
      },
    })
      .pipe(
        map(response => response.data.map(Event.decode))
      );
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`events/${id}`, {
      params: {
        fields: 'plain_text_description',
      },
    })
      .pipe(
        map(response => Event.decode(response.data))
      );
  }
}
