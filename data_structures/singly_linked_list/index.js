class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Insertion and removal are performant compared to array.
 * Access is less performant compared to array
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * insert at the end
   * @param {*} val
   * @returns
   */
  push(val) {
    const node = new Node(val);
    if (this.length == 0) {
      this.head = node;
      this.tail = this.head;
    }
    if (this.length > 0) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }
  /**
   * remove the last element and return it
   */
  pop() {
    if (this.length == 0) return undefined;

    let current = this.head;
    let pre_tail = current;

    while (current.next) {
      pre_tail = current;
      current = current.next;
    }

    this.tail = pre_tail;
    this.tail.next = null;

    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = this.head;
    }
    return current;
  }
  /**
   * remove the first element in the list, otherwise the head
   */

  shift() {
    if (this.length == 0) return undefined;
    const current_head = this.head;

    this.head = current_head.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = this.head;
    }
    return current_head;
  }
  /**
   * unshift add an element to the beginning
   */

  unshift(val) {
    const node = new Node(val);

    if (this.length == 0) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return node;
    }

    node.next = this.head;
    this.head = node;
    this.length++;
    return node;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  /**
   * get by index
   */

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let i = 0;
    let current = this.head;

    while (i != index) {
      current = current.next;
      i++;
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);
    const pred_node = this.get(index - 1);
    if (!pred_node) return false;
    const post_node = pred_node.next;

    const node = new Node(val);
    pred_node.next = node;
    node.next = post_node;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    const pred_node = this.get(index - 1);
    const node_to_remove = pred_node.next;

    pred_node.next = node_to_remove.next;

    this.length--;
    return node_to_remove;
  }
}

const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.traverse();

console.log(list.insert(1, 301));
console.log("\n \n \n");
list.traverse();
