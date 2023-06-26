import { Iterator } from "../interfaces";

export default class ConveyorBelt<T> implements Iterator<T> {
    private collection: T[];
    private position: number = 0;
    constructor(collection: T[]) {
        this.collection = collection
    }
    hasNext(): boolean {
        return this.position < this.collection.length;
    }
    next(): T {
        let value = this.collection[this.position];
        this.position += 1;
        return value;
    }
}