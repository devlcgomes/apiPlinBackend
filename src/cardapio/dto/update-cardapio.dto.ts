import { PartialType } from '@nestjs/mapped-types';
import { CreateCardapioDto, CreateCardatioTipoDto} from './create-cardapio.dto';

export class UpdateCardapioDto extends PartialType(CreateCardapioDto) {
    periodo:string;
    produtos:string[];
}

export class UpdateCardapioTipoDto extends PartialType(CreateCardatioTipoDto){
    periodo:string;
}
