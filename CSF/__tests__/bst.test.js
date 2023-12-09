// __tests__/bst.test.js
import BST from '../src/bst.js';

describe('binarySearchTree', () => {
  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });
});
