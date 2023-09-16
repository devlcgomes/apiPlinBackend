import { Controller, Get, Post, Body, Patch, Param, Delete  } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
    
  }

  @Get()
  async findAll() {
    return await this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.produtosService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return await this.produtosService.update(id, updateProdutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.produtosService.remove(id);
  }
  @Get('categoria/:id')
  async findProdutosByCategoria(@Param('id') id:string){
    return await this.produtosService.findProdutosByCategoria(id);
  }
}
