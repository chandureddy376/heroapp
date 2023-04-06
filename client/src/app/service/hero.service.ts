import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Hero } from '../component/heroes/hero';
import { Heroes} from '../component/heroes/mock.heroes';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8080/api/heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice:MessageService,private http:HttpClient) { }

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
  //const heroes=of(Heroes);
  const heroes=this.http.get<Hero[]>(baseUrl);
  this.messageservice.add('the service fetched the Heroes');
  return heroes;
 }
 getHero(id:number):Observable<Hero>{
  // const hero=Heroes.find(hero=>hero.id==id)!;
  const hero=this.http.get<Hero>(baseUrl+"/"+id);
  this.messageservice.add('we grabbed hero with id of ' +(id));
  return hero;
 }
 update(id:any,data:any){
  // const hero=Heroes.find(hero=>hero.id==id)!;
  console.log(id);
  console.log(data);
 return this.http.put(baseUrl+"/"+id,data);
 }
}
