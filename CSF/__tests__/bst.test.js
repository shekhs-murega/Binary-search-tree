// __tests__/bst.test.js
import BST from '../src/bst.js';

describe('binarySearchTree', () => {
  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });
});

// We need to import our BSTNode now.
import BSTNode from '../src/bst-node.js';

describe('binarySearchTree', () => {


  test('it should create a new root node', () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insertNode(node);
    expect(bst.root).toEqual(node);
  });
});