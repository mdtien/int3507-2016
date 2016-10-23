/**
 * Created by Thinking on 09/15/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const home_service_1 = require("./home.service");
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.loggedIn = false;
        this.email = '';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    loadHomeDatas() {
        this.service.getHomeData()
            .subscribe(body => this.categories = body, err => {
            console.error(err);
        });
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    detailsAction(unitId) {
        if (this.loggedIn) {
            this.router.navigate(['/details', unitId]);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
        this.loadHomeDatas();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/home.component.html',
        providers: [home_service_1.HomeService]
    }), 
    __metadata('design:paramtypes', [home_service_1.HomeService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map