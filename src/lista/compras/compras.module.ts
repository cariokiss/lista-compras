import { Module } from '@nestjs/common';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasEntity } from './entity/compras.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComprasEntity])],
  controllers: [ComprasController],
  providers: [ComprasService],
  exports: [ComprasService],
})
export class ComprasModule {}
