/**
 * LIFO last in first out.
 * last thing added in is the the first thing to treat or to remove
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

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
      this.size++;
      return this.size;
    }
    const old_first = this.first;
    this.first = node;
    this.first.next = old_first;

    this.size++;
    return this.size;
  }

  pop() {
    if (this.size == 0) return null;
    const first = this.first;
    if (this.size == 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return first;
    }
    this.first = first.next;
    this.size--;
    return first.value;
  }
}
