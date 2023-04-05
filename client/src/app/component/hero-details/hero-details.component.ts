import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from 'src/app/service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
   @Input() hero?:Hero;//if we command @input and click the it redirects to dashboard

  constructor(private service:HeroService,private route:ActivatedRoute,private location:Location){}
  ngOnInit(){
    this.getHero();
  }
  getHero(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.service.getHero(id).subscribe(x=> this.hero=x);
  }

  savechanges(){
    console.log('hi');
  this.service.getHero;
  }
goBack(){
  this.location.back();
}

}
