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
const pbst = new BST();

beforeEach(() => {
  pbst.insert(new BSTNode(4));
  pbst.insert(new BSTNode(2));
  pbst.insert(new BSTNode(6));
  pbst.insert(new BSTNode(1));
  pbst.insert(new BSTNode(3));
  pbst.insert(new BSTNode(5));
  pbst.insert(new BSTNode(7));  
});

  test('it should return true if the root node is equal to 4', () => {
    expect(pbst.search(4)).toEqual(true);
  });

  test('it should return true if the value exists in the tree', () => {
    expect(pbst.search(5)).toEqual(true);
  });

  test('it should return false if the value does not exist in the tree', () => {
    expect(pbst.search(10)).toEqual(false);
  });

  test('it should return false if the value is null', () => {
    expect(pbst.search(null)).toEqual(false);
  });
  let bst;

  beforeEach(() => {
    bst = new BST();
    bst.insert(new BSTNode(4));
    bst.insert(new BSTNode(2));
    bst.insert(new BSTNode(6));
    bst.insert(new BSTNode(1));
    bst.insert(new BSTNode(3));
    bst.insert(new BSTNode(5));
    bst.insert(new BSTNode(7));
  });

  test('it should remove a leaf node', () => {
    bst.remove(1);
    expect(bst.root.left.left).toBeNull();
  });

  test('it should remove a node with one child (left)', () => {
    bst.remove(6);
    expect(bst.root.right.data).toEqual(7);
  });

  test('it should remove a node with one child (right)', () => {
    bst.remove(2);
    expect(bst.root.left.data).toEqual(3);
  });

  test('it should remove a node with two children (left)', () => {
    bst.remove(4);
    expect(bst.root.data).toEqual(5);
    expect(bst.root.left.data).toEqual(2);
    expect(bst.root.right.data).toEqual(6);
  });

  test('it should remove a node with two children (right)', () => {
    bst.remove(6);
    expect(bst.root.data).toEqual(4);
    expect(bst.root.left.data).toEqual(2);
    expect(bst.root.right.data).toEqual(7);
  });

  test('it should return false if the node to be removed does not exist', () => {
    expect(bst.remove(100)).toBeFalsy();
  });

  test('it should handle removing the root node', () => {
    bst.remove(4);
    expect(bst.root.data).toEqual(5);
  });

