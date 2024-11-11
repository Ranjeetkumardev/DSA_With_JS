// what is Linked List 
// A data structue that constain a head , tail and length property
// Linked List consist of nodes , and each node has a value and a pointer to another node or null 


/// comparision Between Array and Linked List 
//Linked List 
/*
-Do not have indexes!
-connected via node with a next pointer 
-Random access is not allowed 

// Arrays 
 - indexed in order
 -insersion and deletion can be expensive
 - Can quickly be accessed at a specified index */


// Singley Linked List 
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// create and new node 
/* The code snippet `let fisrt = new Node("hi") fisrt.next = new Node("there!") fisrt.next.next = new
Node("How are you")` is creating a singly linked list with three nodes. */
let fisrt = new Node("hi")
fisrt.next = new Node("there!")
fisrt.next.next = new Node("How ar youe")



// Now Simpler way 

class SinglyLinkedList {
  constructor() {
    this.head = null; // pointer to the head
    this.tail = null; // pointer to the tail
    this.length = 0;  // length of linked list 
  }
  // Now adding bunch of method 
  // adding new node to the linkedList 
  push(val) {
    // creating the new node 
    let newNode = new Node(val)
    // if node is new 
    if (!(this.head)) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    // increament the length by one 
    this.length++
    // return the whole list 
    return this
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val)
  //     current = current.next
  //   }
  // }
  // Removing node form the LinkedList 
  pop(val) {
    if (!(this.head)) return undefined // you can check the length as well if length if zero then return undefined 
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current;
  }

  // Shifting
 /* Removing a new node from the begnning of the Linked List */
 /*
 - if there are no nodes , return undefined 
 - Store the current head property in a variable 
 - Set the head property to be the current head next property
 - Decreament the length by 1 
 Return the value of the node removed 
 */

}
//  Pushing PseudoCode 
/* 
- This function should accept a value 
- Create a new node using the value passed to the function 
- if there is no head property on the list set the head and tail to be the newly created node 
- Otherwise set the next property on the tail to be new node and set the tail property on the list to be newly created node 
- increase the length by one 
- Return the LinkedList 
*/
let list = new SinglyLinkedList()
// adding  a new node to the end of the Linked List 
list.push("hi")
list.push("there ")
list.push("how")
list.push("are")
list.push("you")
list.push("what's up")
list.push("there is new node ")



//  Pop Pseudo Code 
/*
- if there are no nodes in the list , return undefined 
- Loop through the list untill you reach the tail 
- Set the next property of the 2nd to last node to be null 
- Decreate the length of the list by 1 
- Return the value of the node removed 
*/
list.pop()
list.pop()
list.pop()


console.log(list)