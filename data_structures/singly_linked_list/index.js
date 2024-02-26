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
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("HEY JOE");
//console.log(JSON.stringify(list.pop(), null, 20));
console.log(list.get(1));
// console.log(JSON.stringify(list, null, 10));
