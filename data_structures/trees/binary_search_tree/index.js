/**
 * Binary tree is tree where every parent node has at most 2 children
 */
/**
 * Binary search tree,
 * every node to the left of a parent is always less than the parent,
 * every node to the right of a parent is always greater than the parent,
 *
 * it is mainly used to compare.
 * it makes it easy to insert, to find a node
 */
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //      10
  //  5       13
  //2   7   11   16
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      /*
        if duplicates
        */
      if (node.value == current.value) return undefined;
      if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }

      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;

    while (current) {
      if (value == current.value) {
        return true;
      }
      if (value > current.value) {
        current = current.right;
      }
      if (value < current.value) {
        current = current.left;
      }
    }
    return false;
  }
}
//      10
//  5       13
//2   7   11   16
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(13);
bst.insert(11);

bst.insert(16);
console.dir(bst, { depth: null });
