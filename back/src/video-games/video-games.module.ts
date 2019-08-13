import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoGame } from './video-game.entity';
import { VideoGamesController } from './video-games.controller';
import { VideoGamesService } from './video-games.service';

@Module({
  controllers: [VideoGamesController],
  imports: [TypeOrmModule.forFeature([VideoGame])],
  providers: [VideoGamesService],
})
export class VideoGamesModule { }
