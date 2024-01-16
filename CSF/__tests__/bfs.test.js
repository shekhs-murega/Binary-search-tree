// bfs.test.js

import Graph from '../src/bfs.js';

describe('breadth-first search', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addNode("Jasmine");
    graph.addNode("Ada");
    graph.addNode("Lydia");
    graph.addNode("Rose");
    graph.addNode("Dylan");
    graph.addNode("Allison");
    graph.addNode("Thomas");
    graph.addNode("Sarah");
    graph.createEdge("Jasmine", "Ada");
    graph.createEdge("Jasmine", "Lydia");
    graph.createEdge("Jasmine", "Rose");
    graph.createEdge("Ada", "Dylan");
    graph.createEdge("Lydia", "Ada");
    graph.createEdge("Dylan", "Allison");
    graph.createEdge("Lydia", "Thomas");
  });

  test('should return false if the target node does not exist', () => {
    expect(graph.breadthFirstReachable("Jasmine", "Albert")).toEqual(false);
  });

  test('should return false if the starting node does not exist', () => {
    expect(graph.breadthFirstReachable("Albert", "Thomas")).toEqual(false);
  });

  test('should check if the first friend in the adjacency list is reachable', () => {
    expect(graph.breadthFirstReachable("Jasmine", "Ada")).toEqual(true);
  });

  test('should return false if the target node cannot be reached from the starting node', () => {
    expect(graph.breadthFirstReachable("Jasmine", "Sarah")).toEqual(false);
  });
});
