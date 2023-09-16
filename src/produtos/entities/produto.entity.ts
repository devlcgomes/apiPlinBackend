import { v4 as uuidv4 } from 'uuid';

export class Produto {
    id:string;
    nome:string;
    preco:number;
    categoria:string;
    descricao:string;
    imagem:string;

    constructor(){
        this.id = uuidv4();
    }
}
