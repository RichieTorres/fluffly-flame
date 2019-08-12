import { Test, TestingModule } from '@nestjs/testing';
import { VideoGamesController } from './video-games.controller';
import { VideoGamesService } from './video-games.service';

describe('VideoGames Controller', () => {
  let controller: VideoGamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoGamesController],
      providers: [VideoGamesService],
    }).compile();

    controller = module.get<VideoGamesController>(VideoGamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should put a game', async () => {
    const aGame = { name: 'new' };
    await controller.create(aGame);
    expect(controller.findAll()).resolves.toMatchObject([aGame]);
  });

});
