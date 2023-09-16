import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  create(createCategoriaDto: CreateCategoriaDto) {
   const {nome} = createCategoriaDto;
   const categoria = new Categoria();
   categoria.nome = nome;
    return this.prisma.categoria.create({
      data:{
        id:categoria.id,
        nome:categoria.nome
      }
    })
  }

  findAll() {
    const categorias = this.prisma.categoria.findMany();
    return categorias;
  }

  findOne(id: string) {
    const categoria = this.prisma.categoria.findUnique({
      where:{
        id:String(id)
      }
    })
    return categoria;
  }

  update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    const {nome} = updateCategoriaDto;
    const categoria = this.prisma.categoria.update({
      where:{
        id:String(id)
      },
      data:{
        nome
      }
    })
    return categoria;
  }

  remove(id: string) {
    const categoria = this.prisma.categoria.delete({
      where:{
        id:String(id)
      }
    })
    return categoria;
  }
}
