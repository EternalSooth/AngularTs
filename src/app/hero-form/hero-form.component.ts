import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  race = ['goblin','ork','angel','demon','human'];
  klass =['assasin','magic','healer','tank'];
  level = 1;

  model = new Hero(18, 'Dr IQ', this.powers[2], this.race[2],this.klass[0],this.level,'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  checklevel(){

    if (Number(this.model.level) > 100) {this.model.level = 88}
    else if (Number(this.model.level) < 1) {this.model.level = 1}
    
  }

  newHero() {
    this.model = new Hero(42, '', '','','',this.level);
  }


}