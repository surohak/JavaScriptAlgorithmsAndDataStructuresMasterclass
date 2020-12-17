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
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);

console.log(graph);

