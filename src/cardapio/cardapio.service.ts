import { Injectable } from '@nestjs/common';
import { CreateCardapioDto, CreateCardatioTipoDto } from './dto/create-cardapio.dto';
import { UpdateCardapioDto, UpdateCardapioTipoDto } from './dto/update-cardapio.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardapioTipo } from './entities/cardapioTipo.entity';

@Injectable()
export class CardapioService {
  constructor(private prisma: PrismaService) {}

  async create(createCardapioDto: CreateCardapioDto) {
    const { periodo, produtos } = createCardapioDto;
    const cardapio = await this.prisma.cardapio.create({
      data: {
        periodo:{
          connect:{
            id:periodo
        }
      },
        produtos:{
          create:produtos.map((produto)=>({
            id:produto
          }))
        }
      },
      include:{
        produtos:true
      }
    })
    return cardapio;
  }


  async findOne(id: string) {
    const cardapio = await this.prisma.cardapio.findUnique({
      where:{
        id:id
      },
      include:{
        produtos:true
      }
    })
    return cardapio;
  }

  async update(id: string, updateCardapioDto: UpdateCardapioDto) {
    const {periodo, produtos} = updateCardapioDto;
    const cardapio = await this.prisma.cardapio.update({
      where:{id:id},
      data:{
        periodo,
        produtos:{
          create:produtos.map((produto)=>({
            id:produto
          }))
        }
      }
    })
    return cardapio;
  }

  async remove(id: number) {
    const cardapio = await this.prisma.cardapio.delete({
      where:{id:id}
    })
    return cardapio;
  }

  async removeIten(id:number, idProduto:number){
    const cardapio = await this.prisma.cardapio.update({
      where:{id:id},
      data:{
        produtos:{
          delete:{
            id:idProduto
          }
        }
      }
    })
    return cardapio;
  }
  
  async createTipo(createCardatioTipoDto: CreateCardatioTipoDto){
    const {periodo} = createCardatioTipoDto;
    const cardapioid = new CreateCardapioTipo();
    const cardapioTipo = await this.prisma.cardapioTipo.create({
      data:{
        id: cardapioid.id,
        periodo
      }
    })
    return cardapioTipo;
  }
  updateTipo(id:string, updateCardapioTipoDto:UpdateCardapioTipoDto){
    const {periodo} = updateCardapioTipoDto;
    const cardapioTipo = this.prisma.cardapioTipo.update({
      where:{id:id},
      data:{
        periodo
      }
    })
    return cardapioTipo;
  }
}
