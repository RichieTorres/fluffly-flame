import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { VideoGamesService } from './video-games.service';
import { CreateDTO } from './dto/create.dto';
import { ValidationPipe } from '../validation.pipe';
import { VideoGame } from './video-game.entity';

@Controller('video-games')
export class VideoGamesController {

    constructor(private readonly vgService: VideoGamesService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createVGDTO: CreateDTO) {
        const newVG: VideoGame = new VideoGame();
        newVG.name = createVGDTO.name;
        await this.vgService.create(newVG);
    }

    @Get()
    async findAll(): Promise<VideoGame[]> {
        return this.vgService.findAll();
    }

}
