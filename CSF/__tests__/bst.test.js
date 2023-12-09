// __tests__/bst.test.js
import BST from '../src/bst.js';
import BSTNode from '../src/bst-node.js';

describe('Binary Search Tree', () => {
  test('should initialize a binary search tree with a root of null', () => {
    const bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test('it should create a new root node', () => {
    const bst = new BST();
    const node = new BSTNode(36);
    bst.insert(node);
    expect(bst.root).toEqual(node);
  });

  test('it should add a child node to the left of the root node', () => {
    const bst = new BST();
    const rootNode = new BSTNode(36);
    bst.insert(rootNode);
    const newNode = new BSTNode(22);
    bst.insert(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test('it should add a child node to the right of the root node', () => {
    const bst = new BST();
    const rootNode = new BSTNode(36);
    bst.insert(rootNode);
    const newNode = new BSTNode(48);
    bst.insert(newNode);
    expect(rootNode.right.data).toEqual(48);
  });
});
