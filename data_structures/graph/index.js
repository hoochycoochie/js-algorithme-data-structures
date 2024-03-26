class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e != v1);
  }

  removeVertex(v) {
    while (this.adjacencyList[v].length) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }
    delete this.adjacencyList[v];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const list = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return null;
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        list[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) return dfs(neighbor);
        });
      }
      return null;
    }
    dfs(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [];
    const visited = {};
    stack.push(start);
    const list = this.adjacencyList;
    const result = [];
    while (stack.length) {
      const current = stack.pop();
      if (!visited[current]) {
        result.push(current);
        visited[current] = true;
        list[current].forEach((neighbor) => stack.push(neighbor));
      }
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

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
