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
        if(!this.head) {
            return null;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
  
    empty() {
      return this.size() === 0;
    }
  
    erase(index) {
        if(index < 0 || index > this.size() || !this.head) return null;
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        let counter = 0;
        while(currentNode) {
            if(counter === index - 1) {
                currentNode.next = currentNode.next.next;
            }
            counter += 1;
            currentNode = currentNode.next;
        }
    }
  
    front() {
        if(!this.head) {
            return null;
        }
        return this.head;
    }
  
    insert(index, value) {
        if(index < 0 || index > this.size() || !this.head) return null;
        else {
            let counter = 0;
            let currentNode = this.head;
            while(currentNode) {
              if(counter === index - 1) {
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
        if(!this.head) return null;
        let currentNode = this.head;
        while(currentNode.next.next) {
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
  
    reverse() {
        if(!this.head) return;
        let currentNode = this.head;
        let rev = [];
        while(currentNode.next) {
            currentNode = currentNode.next;
            rev.unshift(currentNode.data)
        }
        rev.unshift(currentNode.data);
        console.log(rev);
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
  }
  
  const ll = new LinkedList();
  ll.push_back(3);
  ll.push_back(50);
  
  ll.reverse();