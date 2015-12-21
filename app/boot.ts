import {bootstrap} from 'angular2/platform/browser';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {Http} from "angular2/http";
import {HTTP_PROVIDERS} from "angular2/http";
import {LocationStrategy,HashLocationStrategy,ROUTER_PROVIDERS} from "angular2/router";
import {provide} from "angular2/core";
import {enableProdMode} from "angular2/core";

enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  HTTP_PROVIDERS,
  HeroService
]);
