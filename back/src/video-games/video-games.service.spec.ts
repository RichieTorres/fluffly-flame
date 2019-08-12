import { Test, TestingModule } from '@nestjs/testing';
import { VideoGamesService } from './video-games.service';

describe('VideoGamesService', () => {
  let service: VideoGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoGamesService],
    }).compile();

    service = module.get<VideoGamesService>(VideoGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should put a game', () => {
    const aGame = { name: 'new' };
    service.create(aGame);
    expect(service.findAll()).toMatchObject([aGame]);
  });

});
