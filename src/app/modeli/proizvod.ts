export class Proizvodi{

    id: number;
    naziv: string;
    opis: string;
    cena: number;

    constructor(id:number, naziv:string, opis='', cena=0) {
        this.id = id;
        this.naziv = naziv;
        this.opis = opis;
        this.cena = cena;
       
    }
}


