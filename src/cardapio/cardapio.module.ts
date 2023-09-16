import { Module } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioController } from './cardapio.controller';

@Module({
  controllers: [CardapioController],
  providers: [CardapioService],
})
export class CardapioModule {}
