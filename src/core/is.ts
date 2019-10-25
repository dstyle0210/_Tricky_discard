import { TRICKY } from './tricky';

class TRICKY_IS extends TRICKY {
    name:string;
    name2:string;
    constructor(name) { 
        super();
        this.name = name; 
    }

    url():string{
        return this.domain + this.name;
    }
};

const _Tricky = new TRICKY_IS("test");
console.log(_Tricky.url());