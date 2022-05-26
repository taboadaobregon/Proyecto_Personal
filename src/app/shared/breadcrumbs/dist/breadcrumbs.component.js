"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BreadcrumbsComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        console.log("route => ", route.snapshot.children[0].data);
        this.titulo$ = this.getArgumentosRuta().subscribe(function (_a) {
            var titulo = _a.titulo;
            _this.titulo = titulo;
            document.title = "Admin - " + titulo;
        });
    }
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this.titulo$.unsubscribe();
    };
    BreadcrumbsComponent.prototype.getArgumentosRuta = function () {
        return this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.ActivationEnd; }), operators_1.filter(function (event) { return event.snapshot.firstChild === null; }), operators_1.map(function (event) { return event.snapshot.data; }));
    };
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumbs',
            templateUrl: './breadcrumbs.component.html',
            styles: []
        })
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
