import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CreateCardapioDto, CreateCardatioTipoDto } from './dto/create-cardapio.dto';
import { UpdateCardapioDto, UpdateCardapioTipoDto } from './dto/update-cardapio.dto';

@Controller('cardapio')
export class CardapioController {
  constructor(private readonly cardapioService: CardapioService) {}

  @Post()
  create(@Body() createCardapioDto: CreateCardapioDto) {
    return this.cardapioService.create(createCardapioDto);
  }

  @Get()
  findAll() {
    return this.cardapioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardapioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardapioDto: UpdateCardapioDto) {
    return this.cardapioService.update(id, updateCardapioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardapioService.remove(+id);
  }
  @Post()
  CreateTipo(@Body() createCardapioTipoDto: CreateCardatioTipoDto){
    return this.cardapioService.createTipo(createCardapioTipoDto);
  }
  @Patch(':id')
  UpdateTipo(@Param('id') id: string, @Body() updateCardapioTipoDto: UpdateCardapioTipoDto){
    return this.cardapioService.updateTipo(id, updateCardapioTipoDto);
  }
}
