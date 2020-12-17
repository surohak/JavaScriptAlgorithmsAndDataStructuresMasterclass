class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			return;
		}

		this.adjacencyList[vertex] = [];
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1] || 
			!this.adjacencyList[v2]) {
			return;
		}

		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(v1, v2) {
		if (!this.adjacencyList[v1] || 
			!this.adjacencyList[v2]) {
			return;
		}

		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			return;
		}

		while (this.adjacencyList[vertex].length) {
			const adjcentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjcentVertex)
		}

		delete this.adjacencyList[vertex];
	}

	depthFirstRecursive(start){
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) {
				return null;
			}

			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					return dfs(neighbor)
				}
			})
		})(start);

		return result;
	}

	depthFirstIterative(start){
		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			})
		}

		return result;
	}

	breadthFirst(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {   // slice().reverse()
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			})
		}

		return result;
	}
}

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('San Franciscp')
graph.addVertex('London');

graph.addEdge('Tokyo', 'London')
graph.removeEdge('Tokyo', 'London');

graph.removeVertex('London')

// console.log(graph);


const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

const aDR = g.depthFirstRecursive('A');
const aDI = g.depthFirstIterative('A');
const aB = g.breadthFirst('A');

console.log(aDR, aDI, aB);


