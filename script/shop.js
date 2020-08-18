// Akjosch 's https://github.com/Akjosch solution:
setup.shopinv = new Map();
setup.ShopInv = class ShopInv {
    constructor(name, price, stack) {
        this.id = name + "-" + price + "-" + stack;
        this.name = name;
        this.price = price;
        this.stack = stack;
        setup.shopinv.set(this.id, this);
   }
};
/* add prices to the "DB" */
new ShopInv('Bagel', 2, true);
/* and name a class to use them */
setup.ShIn = class ShIn {
    constructor(base, details) {
        Object.assign(this, details);
        this.baseId = base.id;
    }
    get base() { return setup.shopinv.get(this.baseId); }
    get name() { return this.base.name; }
    get price() { return this.base.price; }
    get stack() { return this.base.stack; }
    /* add clone() and toJSON() implementations here */ 
};

/* ###################################################### */

// setup.cars = new Map();
// setup.CarModel = class CarModel {
//     constructor(make, model, year) {
//         this.id = make + "-" + model + "-" + year;
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         setup.cars.set(this.id, this);
//    }
// };
// /* add models to the "DB" */
// new CarModel('Eagle', 'Talon TSi', 1993);
// /* and make a class to use them */
// setup.Car = class Car {
//     constructor(base, details) {
//         Object.assign(this, details);
//         this.baseId = base.id;
//     }
//     get base() { return setup.cars.get(this.baseId); }
//     get make() { return this.base.make; }
//     get model() { return this.base.model; }
//     get year() { return this.base.year; }
//     /* add clone() and toJSON() implementations here */ 
// };


// And now if you have some car model in _model already, you can create your own instance:
// <<set $car = new setup.Car(_model, { color: "red", mileage: 123819 })>>
// [16:58]
// If you don't have a model ...
// <<set _model = setup.cars.get("Eagle-Talon TSi-1993")>>