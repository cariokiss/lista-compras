import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ComprasEntity } from './entity/compras.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ComprasService {
    constructor(
        @InjectRepository(ComprasEntity)
        private readonly ComprasRepository: Repository<ComprasEntity>,
    ){}

    async findAll() {
        return await this.ComprasRepository.find();
    }

    async findOneOrFail(id: string) {
        try {
        return await this.ComprasRepository.findOneByOrFail({ id });
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    async create(data) {
        return await this.ComprasRepository.save(this.ComprasRepository.create(data));
    }

    async update(id: string, data) {
        const lista = await this.findOneOrFail(id);

        this.ComprasRepository.merge(lista, data);
        return await this.ComprasRepository.save(lista);
    }

    async delete(id: string) {
        await this.findOneOrFail(id)
        await this.ComprasRepository.softDelete(id);
    }
}
