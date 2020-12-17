class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push (val) {
		const newNode = new Node(val);
		
		if (!this.head) {
			this.head = newNode
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) {
			return undefined;
		}

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift () {
		if (!this.head) {
			return undefined;
		}

		const currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		return currentHead;
	}

	unshift (val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get (index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	set (index, val) {
		const foundNode = this.get(index);

		if (!foundNode) {
			return false;
		}

		foundNode.val = val;
		return true;
	}

	insert (index, val) {
		if (index < 0 || index > this.length) {
			return false;
		}

		if (index === this.length) {
			!!this.push(val);
		}

		if (index === 0) {
			!!this.unshift(val);
		}

		const newNode = new Node(val);
		const prev = this.get(index - 1);
		const temp = prev.next;

		prev.next = newNode;
		newNode.next = temp;

		this.length++;
		return true;
	}

	remove (index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		if (index === 0) {
			return this.shift();
		}

		if (index === this.length - 1) {
			return this.pop();
		}

		const previousNode = this.get(index - 1);
		const removed = previousNode.next;

		previousNode.next = removed.next;
		
		this.length--;
		return removed;
	}

	reverse () {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;

			prev = node;
			node = next;
		}

		return this;
	}

	rotate(number) {
	    const index = number < 0 ? number + this.length : number;

	    if (index < 0 || index >= this.length) return undefined;
	    if (index === 0) return this;

	    const prevNode = this.get(index - 1);

	    if (!prevNode) return undefined;

	    this.tail.next = this.head;
	    this.head = prevNode.next;
	    this.tail = prevNode;
	    prevNode.next = null;

	    return this;
  	}
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('aaa');
list.push('bbb');

list.pop();
// list.shift();
list.unshift('ccc')

const first = list.get(0);
list.set(0, 'abc');
list.insert(1, 'ddd')
list.remove(1);
list.reverse();

console.log(list);



