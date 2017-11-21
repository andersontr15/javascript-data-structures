/* Linked List implementation in JavaScript
   Authored by Theodore Anderson 11/21/2017 0538pm
*/
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  back() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  empty() {
    return this.size() === 0;
  }

  erase(index) {
    if (index < 0 || index > this.size() || !this.head) return null;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index - 1) {
        currentNode.next = currentNode.next.next;
      }
      counter += 1;
      currentNode = currentNode.next;
    }
  }

  front() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  insert(index, value) {
    if (index < 0 || index > this.size() || !this.head) return null;
    else {
      let counter = 0;
      let currentNode = this.head;
      while (currentNode) {
        if (counter === index - 1) {
          currentNode.next = new Node(value, currentNode.next);
          return;
        }
        counter += 1;
        currentNode = currentNode.next;
      }
      return null;
    }
  }

  pop_back() {
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    let removed = currentNode.next;
    currentNode.next = null;
    return removed;
  }

  pop_front() {
    if (!this.head) return;
    let removed = this.head;
    this.head = this.head.next;
    return removed;
  }

  push_back(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode = new Node(value);
    }
  }

  push_front(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let currentHead = this.head;
      this.head = new Node(value, currentHead);
    }
  }

  remove_value(value) {
    if (!this.head) {
      return;
    }
    else if (this.head.data === value) {
      this.head = this.head.next;
      return;
    } 
    else {
      let previous = this.head;
      while(previous.next && previous.next.data !== value) {
        previous = previous.next;
      }
      if(previous.next) {
        previous.next = previous.next.next;
        return;
      }
    }
  }

  reverse() {
    if (!this.head) return;
    let currentNode = this.head;
    let rev = [];
    while (currentNode.next) {
      currentNode = currentNode.next;
      rev.unshift(currentNode.data);
    }
    rev.unshift(currentNode.data);
    return rev;
  }

  size() {
    if (!this.head) return 0;
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return counter;
  }

  value_at(index) {
    if (index < 0 || !this.head) return;
    if (index === 0) {
      return this.head;
    }
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter += 1;
      currentNode = currentNode.next;
    }
    return null;
  }

  value_n_from_end(n) {
    if(!this.head) return;
    else if(n < 0 || n > this.size()) return;
    else {
      let slow = this.head;
      let fast = this.head;
      while(n > 0) {
        fast = fast.next;
        n--;
      }
      if(!fast) {
        return this.head.next;
      }
      while(fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

}

// const ll = new LinkedList();