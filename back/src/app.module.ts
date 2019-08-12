import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoGamesModule } from './video-games/video-games.module';

@Module({
  imports: [VideoGamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
