/* 
  Author: Zac Zajdel
*/
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // We push an element onto the stack and increment our count variable.
    push(element) {
        this.items[this.count] = element;
        this.count++; 
    }

    // Returns the size of the stack by accessing the count's amount.
    size() {
        return this.count;
    }

    // Checks if the count is zero return true, otherwise return false.
    isEmpty() {
        return this.count === 0;
    }

    /* We verify the stack is not empty then decrement our count and 
        return the new value on top of the stack.*/ 
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    /* Checks to see if the stack is empty then finds the item at the
        top of the stack. */
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    // Clears the stack by setting making the array empty and the count equal to zero.
    clear() {
        this.items = [];
        this.count === 0;
    }

    // Returns an empty string if stack is empty. We then loop through all the objects in the stack and return them.
    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for (let i = 0; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}



