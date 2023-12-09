// src/bst.js
import BSTNode from './bst-node.js';


export default class BST {
    constructor() {
      this.root = null;
    }
  
    insert(node) {
        if (this.root === null) {
          this.root = node;
        } else if (this.root.data > node.data) {
          this.root.left = node;
        } else if (this.root.data < node.data) {
          this.root.right = node;
        }
      }
    }