import { v4 as uuidv4 } from 'uuid';

export class Cardapio {
    id:string;
    periodo:string;
    produtos:string[];

    constructor(){
        this.id = uuidv4();
    }
}




