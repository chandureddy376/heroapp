import { Component } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock.heroes';
import { HeroService } from 'src/app/service/hero.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes:Hero[]=[]  ;
  selectedhero?:Hero;
  
  // hero:Hero={
  //   id:1,
  //   name:'chandu',

  // };
  constructor(private service:HeroService ,private messageservice:MessageService){}
  ngOnInit(){
    this.getHeroes();
  }
getHeroes():void{
  this.service.getHeroes().subscribe(x=>{
    console.log(x);
    this.heroes=x});
    this.heroes.map((x)=>{
      console.log(x.id);
    })
}


  onselected(hero:Hero){
    this.messageservice.add('you selected Hero with id: ' + (hero.id) + ' and name: ' + (hero.name) )
    console.log(hero);
    this.selectedhero=hero;
  }

 

}
