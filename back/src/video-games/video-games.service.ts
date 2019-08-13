import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoGame } from './video-game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoGamesService {
    constructor(@InjectRepository(VideoGame) private readonly vgRepository: Repository<VideoGame>) { }

    create(v: VideoGame) {
        return this.vgRepository.save(v);
    }

    findAll(): Promise<VideoGame[]> {
        return this.vgRepository.find();
    }
}
