import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ComprasService } from './compras.service';

@Controller('api/v1/compras')
export class ComprasController {
    constructor(private readonly ComprasService: ComprasService) {}

    @Get()
    async index() {
        return await this.ComprasService.findAll();
    }

    @Post()
    async create(@Body() body) {
        return await this.ComprasService.create(body);
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.ComprasService.findOneOrFail(id);
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body) {
        return await this.ComprasService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        await this.ComprasService.delete(id)
    }
}
