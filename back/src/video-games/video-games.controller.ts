import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { VideoGamesService } from './video-games.service';
import { VideoGame } from './video-game.interface';
import { CreateDTO } from './dto/create.dto';
import { ValidationPipe } from '../validation.pipe';

@Controller('video-games')
export class VideoGamesController {

    constructor(private readonly vgService: VideoGamesService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createVGDTO: CreateDTO) {
        this.vgService.create(createVGDTO);
    }

    @Get()
    async findAll(): Promise<VideoGame[]> {
        return this.vgService.findAll();
    }

}
