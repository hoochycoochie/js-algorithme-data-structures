/**
 * FIFO last in first out.
 * first thing added in is the the first thing to treat or to remove
 */

/**
 * using Singly Linked list, pop and push should be constant time complexity
 */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size == 0) {
      this.first = node;
      this.last = this.first;

      this.size++;
      return node;
    }
    this.last.next = node;
    this.last = node;
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size == 0) {
      return null;
    }
    const first_node = this.first;
    if (this.size == 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return first_node;
    }

    this.first = this.first.next;

    this.size--;
    return first_node.value;
  }
}
