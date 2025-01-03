"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logstring) {
    console.log("Looger Factory");
    return function (constructor) {
        console.log(logstring);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    return function (constructor) {
        console.log("Rendering template");
        const hookel = document.getElementById(hookId);
        const p = new constructor();
        if (hookel) {
            hookel.innerHTML = template;
            hookel.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object....');
    }
};
Person = __decorate([
    Logger('Logger...'),
    withTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("give the valid number");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
//# sourceMappingURL=app.js.map