import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Http} from 'angular2/http';
import {Hero} from "./hero";
import {Observable} from 'rxjs/observable';
import  'rxjs/add/operator/map';
import {Response} from "angular2/http";

@Injectable()
export class HeroService {
    http:Http;

	constructor(http:Http){
        this.http = http;
	}

	getHeroes() {
		return this.http.get('heroes.json').map(res => {
            return res.json()
        });
	}

	getHero(id: number) {

		return this.http.get('heroes.json')
            .map(res=> {
                return res.json();
             })
            .map((heroes:Hero[]) => {
                return (heroes.filter((hero:Hero) => hero.id === id))[0];
             });
	}
}
