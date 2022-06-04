import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  HEROES: Hero[] = []
  
  klass = ['Assasin','Programer','Magic','Warior']
  race = ['Human','Angel','Demon','Ork']
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

   
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  /*getClass(): void{
    let klass = parseInt(this.route.snapshot.paramMap.get('klass')!, 10);
    this.heroService.getHeroClass(klass).subscribe(hero => this.hero = hero);
  }*/

 /*getlevel(level: number):void{
  let lvl = parseInt(this.route.snapshot.paramMap.get('level')!, 10);
  this.heroService.getlevel(level).subscribe(hero => this.hero = hero);
 }*/
  

  goBack(): void {
    this.location.back();
    
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  
  }



