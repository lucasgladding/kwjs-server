export class Event {
  name: string;
  description: string;
  starts_at: Date;
  ends_at: Date;
  duration: number;
  attendees_count: number;

  constructor(data: any) {
    this.name = data.name;
    this.description = data.description;
    this.starts_at = data.starts_at;
    this.ends_at = data.ends_at;
    this.duration = data.duration;
    this.attendees_count = data.attendees_count;
  }

  static decode(data: any): Event {
    return new Event({
      name: data.name,
      description: data.description,
      starts_at: new Date(data.time),
      ends_at: new Date(data.time + data.duration),
      duration: data.duration,
      attendees_count: data.yes_rsvp_count,
    });
  }
}
