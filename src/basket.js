class Basket {
    constructor (maxCapacity) {
        this._capacity = 0;
        this._maxCapacity = maxCapacity;
        this._itemList = [];
    }

    capacity() {
        return this._capacity;
    }

    maxCapacity () {
        return this._maxCapacity;
    }

    itemList () {
        return this._itemList;
    }

    isFull () {
        if (this.capacity === this.maxCapacity) {
            return true;
        }
        else {
            return false;
        }
    }

    addItem(item) {
        if (this.capacity < this.maxCapacity){
            this.itemList += item;
        }
        else {
            console.log('Basket is Full')
        }
    }

    

}

module.exports = Basket;