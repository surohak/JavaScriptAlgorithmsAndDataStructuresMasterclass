class PriorityQueueBasic {
	constructor() {
		this.values = [];
	}

	enqueue(val, prio) {
		this.values.push({ 
			value: val, 
			priority: prio, 
		});

		this.sort();
	}

	dequeue() {
		return this.values.shift() ;
	}

	sort(){
		this.values.sort((a, b) => a.priority - b.priority)
	}
}

const queue = new PriorityQueueBasic();

queue.enqueue('B', 3);
queue.enqueue('C', 5);
queue.enqueue('D', 5);
queue.enqueue('Q', 20);
queue.enqueue('P', 1.5);

queue.dequeue();

console.log(queue.values);
