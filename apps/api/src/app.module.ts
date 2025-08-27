import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { providers } from './providers/providers';

@Module({
  imports: [providers.auth],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
