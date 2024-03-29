export default class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
    addNode(name) {
        this.adjacencyList.set(name, new Set());
      }
      hasNode(name) {
        if (this.adjacencyList.get(name)) {
          return true;
        }
        return false;
  }
  createEdge(node1, node2) {
    let set1 = this.adjacencyList.get(node1);
    let set2 = this.adjacencyList.get(node2);
    set1.add(node2);
    set2.add(node1);
  }
  createEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }
  hasEdge(node1, node2) {
    if (this.adjacencyList.get(node1).has(node2)) {
      return true
    }
    return false;
  }
  removeEdge(node1, node2) {
    this.adjacencyList.get(node1).delete(node2);
    this.adjacencyList.get(node2).delete(node1);
  }
  removeNode(name) {
    if (this.adjacencyList.has(name)) {
      this.adjacencyList.get(name).forEach((edge) => {
        this.adjacencyList.get(edge).delete(name);
      });
      this.adjacencyList.delete(name);
    }
  }
  depthFirstReachable(startingNode, targetNode) {
    if (!this.adjacencyList.has(startingNode) || !this.adjacencyList.has(targetNode)) {
      return false;
    }
  
    const stack = [startingNode];
    const visited = new Set();
  
    while (stack.length) {
      const currentNode = stack.pop();
  
      if (currentNode === targetNode) {
        return true;
      }
  
      visited.add(currentNode);
  
      const neighbors = this.adjacencyList.get(currentNode) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor) && !stack.includes(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  
    return false;
  }
  
}
