class Queue {
	constructor() {
		this.innerStack = new Stack()
		this.outerStack = new Stack();
	}

	enqueue(value) {
		this.innerStack.push(value);
	}

	dequeue() {
		while(this.innerStack.peek()) {
			this.outerStack.push(this.innerStack.pop())
		}
		const removed = this.outerStack.pop();

		while(this.outerStack.peek()) {
			this.innerStack.push(this.outerStack.pop())
		}

		return removed;
	}

	peek() {
		while(this.innerStack.peek()) {
			this.outerStack.push(this.innerStack.pop())
		}
		const peeked = this.outerStack.peek();

		while(this.outerStack.peek()) {
			this.innerStack.push(this.outerStack.pop())
		}

		return peeked;
	}

}

class Stack {
	constructor() {
		this.data = [];
	}
	push(value) {
		this.data[this.data.length] = value;
	}
	pop() {
		const removed = this.data[this.data.length - 1];
		this.data.length -= 1;
		return removed;
	}
	peek() {
		return this.data[this.data.length - 1]
	}
}

const q = new Queue();
q.enqueue(3);
q.enqueue(4);
q.dequeue();
console.log(q);
