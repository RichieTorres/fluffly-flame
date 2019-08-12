import { Injectable } from '@nestjs/common';
import { VideoGame } from './video-game.interface';

@Injectable()
export class VideoGamesService {
    private storage: VideoGame[] = [];

    create(v: VideoGame) {
        this.storage.push(v);
    }

    findAll(): VideoGame[] {
        return this.storage;
    }
}
