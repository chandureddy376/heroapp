import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Hero } from '../component/heroes/hero';
import { Heroes} from '../component/heroes/mock.heroes';
import { MessageService } from './message.service';
 



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice:MessageService) { }

//   create(data:any){
//     return this.http.post(baseUrl,data);
//   }
//   delete(id:any){
  
//     return this.http.delete(baseUrl+'/'+id);
//   }
//   getAll(){
//     return this.http.get(baseUrl);
//   }
//  update(id:any,data:any){
//   return this.http.put(baseUrl+'/'+id,data);
//  }
 getHeroes():Observable<Hero[]>{
  const heroes=of(Heroes);
  this.messageservice.add('the service fetched the Heroes');
  return heroes;
 }
 getHero(id:number):Observable<Hero>{
  const hero=Heroes.find(hero=>hero.id==id)!;
  this.messageservice.add('we grabbed hero with id of ' +(id));
  return of(hero);
 }
}
