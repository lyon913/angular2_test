System.register(['angular2/core', 'angular2/router', './hero.service', './hero-detail.component', "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, hero_detail_component_1, router_2, router_3;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
                router_3 = router_2_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                    this.searchTerm = "";
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.selectedHero = undefined;
                    this.heroes = [];
                    this._heroService.getHeroes().subscribe(function (heroes) { return _this.heroes = heroes; });
                    return this.heroes;
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.heroes = this.getHeroes();
                };
                HeroesComponent.prototype.onSearchChange = function () {
                    var _this = this;
                    this.selectedHero = undefined;
                    this._heroService.getHeroes().map(function (heroes) {
                        return heroes.filter(function (hero) {
                            var name = hero.name.toLowerCase();
                            return name.includes(_this.searchTerm.toLowerCase());
                        });
                    }).subscribe(function (heroes) { return _this.heroes = heroes; });
                    this._router.navigate(['./Heroes']);
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css'],
                        directives: [router_3.RouterOutlet]
                    }),
                    router_2.RouteConfig([
                        { path: '/', name: 'Heroes', component: hero_detail_component_1.HeroDetailComponent, useAsDefault: true },
                        //{path: '/heroes', name: 'Heroes', component: HeroesComponent},
                        { path: '/detail/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
            })();
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map