import { Component } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
heroes:Hero[]=[];
constructor(private service:HeroService){

}
ngOnInit(){
  this.getHeroes();
}
getHeroes(){
this.service.getHeroes().subscribe(x=>this.heroes=x.slice(1,5))
}
}
