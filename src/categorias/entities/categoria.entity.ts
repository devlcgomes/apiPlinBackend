import { v4 as uuidv4 } from 'uuid';
export class Categoria {
    id:string;
    nome:string;

    constructor(){
        this.id = uuidv4();
    }
}
