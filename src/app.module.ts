import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourierServiceModule } from './setup/courier-service/courier-service.module';

@Module({
  imports: [CourierServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
