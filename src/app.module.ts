import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasModule } from './lista/compras/compras.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'mariadb',
        host: ConfigService.get('DB_HOST', 'localhost'),
        port: Number(ConfigService.get('DB_PORT', 3306)),
        username: ConfigService.get('DB_USERNAME', 'root'),
        password: ConfigService.get('DB_PASSWORD', '123'),
        database: ConfigService.get('DB_DATABASE', 'lista'),
        entities: [],
        synchronize: true,
      }),
    }),
    ComprasModule,
  ],
  })
export class AppModule {}
