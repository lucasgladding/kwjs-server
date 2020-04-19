export class Event {
  name: string;
  description: string;
  starts_at: Date;
  duration: number;

  constructor(data: any) {
    this.name = data.name;
    this.description = data.description;
    this.starts_at = data.starts_at;
    this.duration = data.duration;
  }

  static decode(data: any): Event {
    return new Event({
      name: data.name,
      description: data.description,
      starts_at: new Date(data.time),
      duration: data.duration,
    });
  }
}
