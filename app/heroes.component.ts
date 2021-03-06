import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {RouteConfig} from "angular2/router";
import {RouterOutlet} from "angular2/router";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/', name: 'Heroes', component: HeroDetailComponent, useAsDefault: true},
    //{path: '/heroes', name: 'Heroes', component: HeroesComponent},
    {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class HeroesComponent implements OnInit {
    public heroes:Hero[];
    public selectedHero:Hero;

    searchTerm:string = "";

    constructor(private _heroService:HeroService, private _router:Router) {
    }

    getHeroes() {
        this.selectedHero = undefined;
        this.heroes = [];

        this._heroService.getHeroes().subscribe((heroes:Hero[]) => this.heroes = heroes);

        return this.heroes;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

    ngOnInit() {
        this.heroes = this.getHeroes();
    }

    onSearchChange() {
        this.selectedHero = undefined;
        this._heroService.getHeroes().map((heroes:Hero[]) => {

            return heroes.filter((hero:Hero) => {
                var name:string = hero.name.toLowerCase();
                return name.includes(this.searchTerm.toLowerCase());
            });
        }).subscribe((heroes:Hero[]) => this.heroes = heroes);
        this._router.navigate(['./Heroes']);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}
