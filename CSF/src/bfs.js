// bfs.js

export default class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addNode(node) {
      this.adjacencyList.set(node, []);
    }
  
    createEdge(node1, node2) {
      this.adjacencyList.get(node1).push(node2);
      this.adjacencyList.get(node2).push(node1);
    }
  
    breadthFirstReachable(startNode, targetNode) {
      if (!this.adjacencyList.has(startNode) || !this.adjacencyList.has(targetNode)) {
        return false; // If either startNode or targetNode does not exist, return false
      }
  
      const visited = new Set();
      const queue = [startNode];
  
      while (queue.length > 0) {
        const current = queue.shift();
  
        if (current === targetNode) {
          return true; // Target node found
        }
  
        if (!visited.has(current)) {
          visited.add(current);
          queue.push(...this.adjacencyList.get(current));
        }
      }
  
      return false; // Target node not reachable
    }
  }
  