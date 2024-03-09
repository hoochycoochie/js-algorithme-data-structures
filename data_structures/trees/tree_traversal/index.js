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

  /**
   * The BST function performs a level-order traversal on a binary search tree and returns an array of
   * node values.
   * @returns The BST() function is returning an array of values from a breadth-first traversal of a
   * binary search tree starting from the root node.
   */
  /**
   * breath search tree
   * @returns horizontal visiting the tree
   */
  BST() {
    let node = this.root;
    const queue = [];
    const data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
  /**
   * The DFSPreOrder function performs a depth-first search traversal of a binary tree starting from the
   * root node and returns an array of visited node values in pre-order.
   * @returns The DFSPreOrder() function returns an array of values in the order they were visited during
   * a Depth First Search Pre-Order traversal of a binary tree starting from the root node.
   */
  /**
   *
   * @returns visit vertically beginning from the root
   */
  DFSPreOrder() {
    const visited = [];
    let node = this.root;

    function traverse(n) {
      if (!n) return;
      visited.push(n.value);
      if (n.left) traverse(n.left);
      if (n.right) traverse(n.right);
    }
    traverse(node);

    return visited;
  }

  /**
   * The DFSPostOrder function performs a post-order traversal on a binary tree and returns an array of
   * visited node values.
   * @returns The DFSPostOrder() function returns an array of values in post-order traversal of the
   * binary tree starting from the root node.
   */
  DFSPostOrder() {
    const visited = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(node);
    return visited;
  }

  DFSInOrder() {
    const visited = [];
    let node = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(node);
    return visited;
  }
}
//      10
//  6       15
//3   8       20
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.DFSInOrder());
