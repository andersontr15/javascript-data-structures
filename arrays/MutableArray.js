/* Authored by Theodore Anderson 11/16/2017  */
class MutableArray {

    constructor(capacity = 16) {
        this.data = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    at(index) {
        if(index < 0 || index > this.data.length) {
            throw Error(`Out of bounds exception for index ${index}`);
        }
        return this.data[index];
    }

    capacity() {
        return this.capacity;
    }

    delete(index) {
        if(index < 0 || index > this.data.length) return 'Supplied invalid index range';
        this.data.splice(index, 1);
        return this.data;
    }

    find(item) {
        if(this.data.length === 0) return;

        for(let i = 0; i < this.data.length; i++){
            if(this.data[i] === item) return i;
        }
        return -1;
    }

    // O(N) time complexity to insert and shift elements to right 
    // TODO: work on improving the functionality of this method
    insert(index, item) {
        if(index > this.data.length || index < 0) return 'Supplied invalid index range';
        this.data.splice(index, 0, item);
        return this.data;
    }

    is_empty() {
        return this.size === 0;
    }

    // O(N) without using a slice or other helper method
    pop() {
        let arr = [];
        for(let i = 0; i < this.data.length - 1; i ++){
            arr = arr.concat(this.data[i])
        }
        let removed = this.data[this.data.length - 1];
        this.data = arr;
        if(removed !== undefined) {
            this.size -= 1;
        }

        // check if size is 1/4 of capacity; if so, resize our mutable array

        return removed;
    }

    // O(N) time
    prepend(item) {
        this.size += 1;
        let arr = Array.of(item);
        for(let i = 0; i < this.data.length; i++) {
            arr = arr.concat(this.data[i])
        }
        this.data = arr;
    }

    /* method here to automatically allocate more memory for 
       our array
       O(N) time complexity
    */
    push(item) {
        if(this.size + 1 === this.capacity) {
            this.resize(item)
        } 
        else {
            this.data[this.size] = item;
            this.size += 1;
        }
    }

    remove(value) {
        const index = this.data.indexOf(value);
        if(index > -1) {
            this.data.splice(index, 1);
            return this.data;
        }
        else {
            return `${value} is not present in ${this.data}`
        }
    }

    // O(N) time complexity
    resize(item) {
        this.capacity *= 2;
        let arr = new Array(this.capacity);
        let pointer = 0;
        for(let i = 0; i < this.data.length + 1; i++){
            // while i is less than the size, fill in
            // these values with the index
            // otherwise, we will push the item
            if(i <= this.size) {
                arr[i] = this.data[i] === undefined ? item : this.data[i]
            }
        }
        this.data = arr;
        this.size += 1;
    }

    // O(1)
    size() {
        return this.data.length
    }

}

const ma = new MutableArray(4);
ma.push(3);
ma.push(4);
ma.push(12);
ma.push(50);
ma.insert(2, 444);
ma.delete(0);
console.log(ma.remove(12));