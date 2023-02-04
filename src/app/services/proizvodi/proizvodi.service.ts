import { Injectable } from '@angular/core';
import { Proizvod } from 'src/app/shared/models/proizvod';
import { Tag } from 'src/app/shared/models/tag';


@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {
  static getProizvodiById(arg0: any): Proizvod {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAllTags():Tag[]{
    return[
      { name:'All', count:140},
      { name:'univerzalno', count:110},
      { name:'zaNju', count:70},
      { name:'zaNjega', count:70},
      
    ]
    
  }

  getAll(): Proizvod[]{

    return[
  {id:1,
    ime:"Poklon1",
    cena:1500,
    imageUrl:'/assets/images/slika1.jpg',
    zemljaPorekla:"Srbija",
    tags:"univerzalno"

    
  },{id:2,
    ime:" Poklon2",
    cena:2000,
    imageUrl:'/assets/images/slika2.jpg',
    zemljaPorekla:"Srbija",
    tags:"zaNju"

    
  },{id:3,
    ime:"Poklon3",
    cena:1500,
    imageUrl:'/assets/images/slika3.jpg',
    zemljaPorekla:"Srbija",
    tags:"zaNju"

    
  },
  {id:4,
    ime:"Poklon4",
    cena:1500,
    imageUrl:'/assets/images/slika4.jpg',
    zemljaPorekla:"Srbija",
    tags:"zaNjega"

    
  }, {id:5,
    ime:"Poklon5",
    cena:1500,
    imageUrl:'/assets/images/slika5.jpg',
    zemljaPorekla:"Srbija",
    tags:"univerzalno"

    
  }
      
    ]
  }
  getProizvodiById(id: number): Proizvod{
    return this.getAll().find(proizvodi=>proizvodi.id==id)!;
  }
  getAllProizvodiByTag(tag:string): Proizvod[] {

    return tag=="All"? this.getAll(): this.getAll().filter(proizvodi=>proizvodi.tags?.includes(tag));
  

  }
}
