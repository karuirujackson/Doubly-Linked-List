//Import Node 
const Node = require('./Node');

////////////////////////////////////////////////////////////////////////
//Create a class for the doubly linked list with a constructor and methods
class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }
   ///////////////////////////////////////////////////////////
   //An add a node to Head method
  addToHead (data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if(currentHead) {
        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if(!this.tail) {
        this.tail = newHead;
    }
  }
  ///////////////////////////////////////////////////////////
   //An add a node to tail method
  addToTail (data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if(currentTail) {
        currentTail.setNextNode(newTail);
        newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if(!this.head) {
        this.head = newTail;
    }
  }
  ///////////////////////////////////////////////////////////
   //A remove head method
  removeHead() {
    const removedHead = this.head;
    if(removedHead === null) {
        return; //Check if removedTail has value. If not, that means there’s nothing to remove, so return to end the method.
    }
    this.head = removedHead.getNextNode();
    if(this.head) {
        this.head.setPreviousNode(null);
    }
    if(removedHead === this.tail) {
        this.removeTail();
    }
    return removedHead.data;
  }
  ///////////////////////////////////////////////////////////
 //A remove tail method
  removeTail() {
    const removedTail = this.tail;
    if(removedTail === null) {
        return;
    }
    this.tail = removedTail.getPreviousNode();
    if(this.tail) {
        this.tail = setNextNode(null);
    }
    if(removedTail === this.head) {
        this.removeHead();
    }
    return removedTail.data;
  }

  ///////////////////////////////////////////////////////////
  //A remove by data method

  removeByData() {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== data) { //while loop runs while currentNode is not null.
        if (currentNode.data === data) { // check whether the currentNode's data matches data
            nodeToRemove = currentNode;
            break;
        }
        currentNode = currentNode.getNextNode();//updates currentNode to to be its next node
    }
    if (!nodeToRemove) { // checks whether the nodeToRemove has any value
        return null;
    }
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;