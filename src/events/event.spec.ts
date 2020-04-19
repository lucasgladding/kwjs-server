import { Event } from './event';

describe('Event', () => {
  it('should create an event', () => {
    const fixture = require('./fixtures/meetup.events.json');
    const event = Event.decode(fixture[0]);

    expect(event).toBeInstanceOf(Event);
    expect(event.name).toEqual(fixture[0].name);
    expect(event.description).toEqual(fixture[0].description);
    expect(event.starts_at).toEqual(new Date(fixture[0].time));
    expect(event.duration).toEqual(fixture[0].duration);
  });
});
