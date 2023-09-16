import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produto } from './entities/produto.entity';
import { createWriteStream } from 'fs';



@Injectable()
export class ProdutosService {
  constructor(private prisma:PrismaService){}

  async create(createProdutoDto: CreateProdutoDto) {
    const {nome, preco, categoria, descricao} = createProdutoDto;
    const produtoID = new Produto();
    try{
      const produto = await this.prisma.produto.create({
        data:{
          id:produtoID.id,
          nome,
          preco,
          categoria:{
            connect:{
              id:categoria
            }
          },
          descricao,
        }});
      return produto;
    }
    catch(err){
      return err.message;
    }
    
  }

  async findAll() {
    const produtos = await this.prisma.produto.findMany({
      include:{
        categoria:{
          select:{
            nome:true
        }
      }
    }});
    return produtos;
  }

  async findOne(id: string) {
    const produto = await this.prisma.produto.findUnique({
      where:{
        id:String(id)
      },
      include:{
        categoria:true
      }
    })
    return produto;
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    const {nome, preco, categoria, descricao} = updateProdutoDto;
    const produto = await this.prisma.produto.update({
      where:{
        id:String(id)
      },
      data:{
        nome,
        preco,
        categoria:{
          connect:{
            id:categoria
          }
        },
        descricao
      }
    })
    return produto;
  }

  async remove(id: string) {
    const produto = await this.prisma.produto.delete({
      where:{
        id:String(id)
      }
    })
    return produto;
  }
  async findProdutosByCategoria(id:string){
    const produtos = await this.prisma.produto.findMany({
      where:{
        categoria:{
          id:String(id)
        }
      }
    })
    return produtos;
  }
  async saveFile(file: Express.Multer.File) {
    const stream = createWriteStream(`./uploads/${file.filename}`);

    return new Promise((resolve, reject) =>
      stream
        .on('finish', () => resolve(`./uploads/${file.filename}`))
        .on('error', (error) => reject(error))
        .end(file.buffer)
    );
  }
}
