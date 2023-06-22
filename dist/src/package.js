// this will be my implementation of a builder pattern
export class Package {
    hasValidWrapper = false;
    wrapper = "none";
    itemsAmount = 0;
    setOfItems = new Set();
    isSigned = false;
    listGoods() {
        console.log('[Info] Package goods: ');
        console.table(this.open());
    }
    open() {
        return this.setOfItems;
    }
    insertItems(items) {
        this.itemsAmount = items.length;
        this.setOfItems = items;
        return this;
    }
    wrap(wrapper) {
        this.wrapper = wrapper;
        this.hasValidWrapper = wrapper === "plastic";
        return this;
    }
    sign() {
        if (!this.hasValidWrapper) {
            let errorMessage = "[Error] Package can not be sign: \n\t - invalid wrapper: " +
                this.wrapper;
            throw new Error(errorMessage);
        }
        this.isSigned = true;
        return this;
    }
    isValid() {
        if (!this.hasValidWrapper)
            return false;
        if (!this.isSigned)
            return false;
        return true;
    }
}
// this will be a "director" class for building my products
export class Assambly {
    // constructor(){
    // }
    packItems(items, wrapper = "none") {
        let pack = new Package();
        pack.insertItems(items).wrap(wrapper).sign();
        return pack;
    }
}
