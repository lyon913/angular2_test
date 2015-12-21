System.register(['angular2/platform/browser', './hero.service', './app.component', "angular2/http", "angular2/router", "angular2/core"], function(exports_1) {
    var browser_1, hero_service_1, app_component_1, http_1, router_1, core_1, core_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS,
                hero_service_1.HeroService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map