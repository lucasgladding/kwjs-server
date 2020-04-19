import { HttpModule, Module } from '@nestjs/common';

import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [HttpModule.register({
    baseURL: 'https://api.meetup.com/kwjavascript/',
  })],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
