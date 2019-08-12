import { Module } from '@nestjs/common';
import { VideoGamesController } from './video-games.controller';
import { VideoGamesService } from './video-games.service';

@Module({
  controllers: [VideoGamesController],
  providers: [VideoGamesService],
})
export class VideoGamesModule { }
