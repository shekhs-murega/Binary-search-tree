// src/bst.js
import BSTNode from './bst-node.js';

export default class BST {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }

    if (node.data === value) {
      return true;
    }

    if (value < node.data) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  remove(value) {
    const findNode = (node, val) => {
      if (node === null) {
        return null;
      }

      if (val < node.data) {
        node.left = findNode(node.left, val);
      } else if (val > node.data) {
        node.right = findNode(node.right, val);
      } else {
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        node.data = this.minValue(node.right);
        node.right = findNode(node.right, node.data);
      }
      return node;
    };

    this.root = findNode(this.root, value);
  }

  minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
}
