import { Test, TestingModule } from '@nestjs/testing';
import { VideoGamesController } from './video-games.controller';
import { VideoGamesService } from './video-games.service';
import { VideoGame } from './video-game.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('VideoGames Controller', () => {
  let controller: VideoGamesController;
  let service: VideoGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoGamesController],
      providers: [VideoGamesService, {
        provide: getRepositoryToken(VideoGame),
        useValue: {},
      }],
    }).compile();

    controller = module.get<VideoGamesController>(VideoGamesController);
    service = module.get<VideoGamesService>(VideoGamesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should put a game', async () => {
    const aGame = { name: 'new' };
    const a = new VideoGame();
    a.name = aGame.name;

    jest.spyOn(service, 'create').mockImplementation(async () => a);
    await controller.create(aGame);

    jest.spyOn(service, 'findAll').mockImplementation(async () => [a]);
    expect(controller.findAll()).resolves.toMatchObject([aGame]);
  });

});
