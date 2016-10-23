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
/**
 * Created by Thinking on 09/15/2016.
 */
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require('rxjs/Rx');
const Rx_1 = require("rxjs/Rx");
let ListenService = class ListenService {
    constructor(http) {
        this.http = http;
        this.listenUrl = "http://localhost:8080/api/v1/theory/listen";
    }
    getListens() {
        return this.http.get(this.listenUrl)
            .map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
};
ListenService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ListenService);
exports.ListenService = ListenService;
//# sourceMappingURL=listen.service.js.map