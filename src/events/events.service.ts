import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsService {
  constructor(private http: HttpService) {}

  list(): Observable<string[]> {
    return this.http.get<string[]>('events')
      .pipe(
        map(response => response.data)
      );
  }
}
