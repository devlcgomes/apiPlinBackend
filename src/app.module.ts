import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { PrismaModule } from './prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({

  imports: [ProdutosModule, CategoriasModule, CardapioModule, PrismaModule,]
})
export class AppModule {}
