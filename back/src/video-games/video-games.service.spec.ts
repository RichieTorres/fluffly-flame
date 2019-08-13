import { Test, TestingModule } from '@nestjs/testing';
import { VideoGamesService } from './video-games.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VideoGame } from './video-game.entity';

describe('VideoGamesService', () => {
  let service: VideoGamesService;
  const mockRepository = { save: (a) => a, find: () => [] };

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoGamesService, {
        provide: getRepositoryToken(VideoGame),
        useValue: mockRepository,
      }],
    }).compile();

    service = module.get<VideoGamesService>(VideoGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should put a game', () => {
    const aGame: VideoGame = new VideoGame();
    aGame.name = 'new';
    mockRepository.find = () => [aGame];
    service.create(aGame);
    expect(service.findAll()).toMatchObject([aGame]);
  });

});
