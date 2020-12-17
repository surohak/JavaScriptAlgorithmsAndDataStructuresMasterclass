class Node {
	constructor (value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) {
			return null;
		}

		let temp = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;

		return temp.value;
	}
}

const queue = new Queue();

queue.enqueue('first');
queue.enqueue('second');

queue.dequeue();

console.log(queue);

