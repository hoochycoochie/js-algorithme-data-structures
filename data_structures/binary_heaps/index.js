class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length == 0) {
      return;
    }
    let current_index = this.values.length - 1;
    let parent_index = Math.floor((current_index - 1) * 0.5);

    while (current_index > 0) {
      const parent_val = this.values[parent_index];
      const current_val = this.values[current_index];
      if (parent_val >= current_val) break;

      this.swap(parent_index, parent_val, current_index, current_val);
      current_index = parent_index;
      parent_index = Math.floor((current_index - 1) * 0.5);
    }
  }

  extractMax() {
    if (this.values.length == 0) return undefined;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    const values_length = this.values.length;
    let parent_index = 0;
    let parent_value = this.values[parent_index];
    let left_child_index = 2 * parent_index + 1;
    let left_child_value = this.values[left_child_index];
    let right_child_index = 2 * parent_index + 2;
    let right_child_value = this.values[right_child_index];

    while (
      left_child_index <= values_length &&
      right_child_index <= values_length
    ) {
      if (parent_value >= left_child_value && parent_value >= right_child_value)
        break;
      if (
        parent_value < left_child_value &&
        left_child_value > right_child_value
      ) {
        this.swap(
          parent_index,
          parent_value,
          left_child_index,
          left_child_value
        );
        parent_index = left_child_index;
        left_child_index = 2 * parent_index + 1;
      }

      if (
        parent_value < right_child_value &&
        right_child_value > left_child_value
      ) {
        this.swap(
          parent_index,
          parent_value,
          right_child_index,
          right_child_value
        );
        parent_index = right_child_index;
        right_child_index = 2 * parent_index + 2;
      }
    }

    return max;
  }

  swapFirstLast() {
    const last_index = this.values.length - 1;
    const last = this.values[last_index];
    const first_index = 0;
    const first = this.values[0];
    this.values[first_index] = last;
    this.values[last_index] = first;
  }
  swap(parent_index, parent_val, current_index, current_val) {
    this.values[parent_index] = current_val;
    this.values[current_index] = parent_val;
  }
}
const heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(100);
console.log(heap.values);
