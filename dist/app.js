"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Departement' + this.name);
    }
}
const accounting = new Department('Acoounting');
console.log(accounting);
accounting.describe();
