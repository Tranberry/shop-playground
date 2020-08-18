// Akjosch 's https://github.com/Akjosch solution:
var shopinv = new Map();

class ShopInv {
    constructor(id, data) {
        Object.assign(this, data);
        this.id = id;
        shopinv.set(this.id, this);
   }

   create(details) {
       return new Item(this, details);
   }

   static byId(id) {
       return shopinv.get(id);
   }
};

/* add base objects to the "DB" */
new ShopInv("bagel", {name: 'Bagel', price: 2, stack: true});

/* and name a class to use them */
class Item {
    constructor(baseData, details) {
        Object.assign(this, details);
        if(baseData instanceof ShopInv) {
            this.base = baseData;
            this.baseId = baseData.id
        } else {
            this.base = ShopInv.byId(baseData);
            this.baseId = this.base.id;
        }
    }
    get name() { return this.base.name; }
    get price() { return this.base.price; }
    get stack() { return this.base.stack; }
    
    clone() {
        return this.base.create(this);
    }

    toJSON() {
        var data = Object.assign({}, this);
        delete data.base;
        delete data.baseId;
        return JSON.reviveWrapper("new setup.Item(" + JSON.stringify(this.baseId) + ",$ReviveData$)", data);
    }
};

/* make the classes available globally for usage and toJSON */
setup.ShopInv = ShopInv;
setup.Item = Item;