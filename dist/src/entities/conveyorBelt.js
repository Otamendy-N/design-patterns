export default class ConveyorBelt {
    collection;
    position = 0;
    constructor(collection) {
        this.collection = collection;
    }
    hasNext() {
        return this.position < this.collection.length;
    }
    next() {
        let value = this.collection[this.position];
        this.position += 1;
        return value;
    }
}
