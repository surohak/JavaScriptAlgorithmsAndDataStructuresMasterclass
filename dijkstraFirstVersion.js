class PriorityQueue {
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

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			return;
		}

		this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2, weight) {
		if (!this.adjacencyList[v1] || 
			!this.adjacencyList[v2]) {
			return;
		}

		this.adjacencyList[v1].push({ node: v2, weight });
		this.adjacencyList[v2].push({ node: v1, weight });
	}

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		const path = [];
		let smallest;

		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0)
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity)
			}
			previous[vertex] = null;
		}

		while (nodes.values.length) {
			smallest = nodes.dequeue().value;

			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					const nextNode = this.adjacencyList[smallest][neighbor];
					const candidate = distances[smallest] + nextNode.weight;
					const nextNeighbor = nextNode.node;

					if (candidate < distances[nextNeighbor]) {
						distances[nextNeighbor] = candidate; 
						previous[nextNeighbor] = smallest;
						nodes.enqueue(nextNeighbor, candidate)
					}
				}	
			}
		}

		return path.concat(smallest).reverse();
	}

}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

const aToE = graph.Dijkstra('A', 'E');

console.log(aToE);


