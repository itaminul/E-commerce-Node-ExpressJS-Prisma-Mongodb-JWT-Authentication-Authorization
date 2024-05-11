import { Module } from '@nestjs/common';
import { CastService } from './cast.service';
import { CastController } from './cast.controller';

@Module({
  providers: [CastService],
  controllers: [CastController]
})
export class CastModule {}
