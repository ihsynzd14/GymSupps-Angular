import { Injectable } from '@angular/core';
import { Supp } from 'src/app/shared/models/Supp';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class SuppService {

  constructor() { }

  getSuppById(id: number): Supp{
    return this.getAll().find(supp => supp.id == id)!;
  }

  getAllSuppsBySearchTerm(searchTerm:string) :Supp[]{
    return this.getAll().filter(supp =>
      supp.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return[
    { name: 'All', count:7 },
    { name: 'whey_protein', count:2 },
    { name: 'preworkouts', count:3 },
    { name: 'bcaa', count:1 },
    { name: 'fatburners', count:2 },
  ];
  }

  getAllSuppsByTag(tag: string): Supp[]{
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(supp => supp.tags?.includes(tag));
  }

  getAll():Supp[]{
    return [
      {
        id:1,
        name:'Whey Protein BodyBuilding',
        price: 30,
        dailyuse: 'maximum two times a day',
        favorite: false,
        origins: ['UK','USA'],
        stars: 4,
        imageUrl: '/assets/images/whey1.webp',
        tags:['whey_protein'],      
      },
      {
        id:2,
        name:'Isolate Whey Protein',
        price: 35,
        dailyuse: 'maximum two times a day',
        favorite: false,
        origins: ['UK','USA'],
        stars: 5,
        imageUrl: '/assets/images/isolatwhey.webp',
        tags:['whey_protein'],
        
      },
      {
        id:3,
        name:'The Pre Workout',
        price: 35,
        dailyuse: 'one time before workout',
        favorite: false,
        origins: ['GERMANY','UK'],
        stars: 4.5,
        imageUrl: '/assets/images/pre.webp',
        tags:['fatburners','preworkouts'],
        
      },
      {
        id:4,
        name:'Extreme Fat Burner',
        price: 20,
        dailyuse: 'one time before cardio',
        favorite: false,
        origins: ['USA','UK'],
        stars: 4,
        imageUrl: '/assets/images/fatburn.webp',
        tags:['fatburners','preworkouts'],
        
      },
      {
        id:5,
        name:'Amino Chain BCAA',
        price: 23,
        dailyuse: 'one time',
        favorite: false,
        origins: ['GERMANY','USA'],
        stars: 5,
        imageUrl: '/assets/images/bcaa.webp',
        tags:['bcaa','Aminoacids'],
        
      },
      {
        id:6,
        name:'GameBooster',
        price: 20,
        dailyuse: 'one time',
        favorite: false,
        origins: ['GERMANY','UK'],
        stars: 3.5,
        imageUrl: '/assets/images/gameboost.webp',
        tags:['preworkouts'],
        
      },

    ]
  }
  
}
