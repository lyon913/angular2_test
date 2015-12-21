import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    public heroes:Hero[] = [];

    constructor(private _heroService:HeroService, private _router:Router) {

    }

    ngOnInit() {
        //this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
        this._heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes.slice(1,5);
        },error => {
            console.log(error);
        });

    }

    gotoDetail(hero:Hero) {
        this._router.navigate(['/Heroes/HeroDetail', {id: hero.id}]);
    }
}
