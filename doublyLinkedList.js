class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push (val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop () {
		if (!this.head) {
			return undefined;
		}

		const poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;
		return poppedNode;
	}

	shift () {
		if (this.length === 0) {
			return undefined;
		}

		const oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead;
	}

	unshift (val) {
		const newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

    get(index){
        if(index < 0 || index >= this.length) {
        	return null
        };

        let count, current;

        if(index <= this.length / 2){
            count = 0;
            current = this.head;

            while (count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;

            while (count !== index && current.prev) {
                current = current.prev;
                count--;
            }
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

		if (index === 0) {
			return !!this.unshift(val);
		}

		if (index === this.length) {
			return !!this.push(val);
		}

		const newNode = new Node(val);
		const beforeNode = this.get(index - 1);
		const afterNode = beforeNode.next;

		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;

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

		const removed = this.get(index);
		const beforeNode = removed.prev;
		const afterNode = removed.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;

		// removed.prev.next = removed.next;
		// removed.next.prev = removed.prev;
		
		removed.next = null;
		removed.prev = null;

		this.length--;
		return removed;
	}

	reverse() {
		if (!this.head) {
			return null;
		}

		let currentNode = this.head;
    	this.tail = currentNode;

	    while (currentNode !== null) {
	      let prev = currentNode.prev;

	      currentNode.prev = currentNode.next;
	      currentNode.next = prev;

	      if (currentNode.prev) {
	        currentNode = currentNode.prev;
	      } else {
	        this.head = currentNode;
	        break;
	      }
	    }

	    return this;
	}
}


const list = new DoublyLinkedList();

list.push('aaa');
list.push('bbb');
list.push('ccc');

// list.pop();
// list.shift();
// list.unshift('ddd');

// const first = list.get(0);
// list.set(0, 'ddd')
// console.log(first);

// list.insert(2, 'ddd')
// list.remove(1)

// const reversed = list.reverse();

console.log(a);


