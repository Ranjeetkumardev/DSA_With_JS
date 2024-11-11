//  What is Treee 
/* Tree is a data structure that consist of nodes in a parent / child relationship*/


// List -> Linear 
// Trees -> non-Linear 

// Tree Terminology 
/*
- Root - The to node in a tree 
- Child - a node directely connected to another node when moving away from the root 
- Parent - The converse notion of a child 
- Siblings - Agroup of nodes with the same parent
- Leaf -A node with no children 
- Eadge -The connection between one node and another 7
-*/
/*  
   2 -> Parrent 76 
 / \   \             
9   12  8 -> Leaf
*/ // valid node  bcz it have only one parent node */

// Tree Real world Example 
/*
HTML DOM
- Network Routing 
- Abstract Syntax tree 
- AI
- Folders in OS 
- Computer file system
*/


// Kind of Trre 
// There is multiple type of tree , but mostly used is 
/*
- Tree 
- Binary Tree  - > must have only two child node 
- Binary Search Treee -> it have some kind of sorted data
 
*/

// Binary Search Tree 
/*
- Every parent node has at most two children 
- Every node to the left of a parent node is always less than the parrent node is always grater than the parent
*/


//The Binary Search Tree Classes  

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTee {
    constructor() {
        this.root = null; // this is important for BST
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this
        } else {
            let current = this.root
            while (true) {
                // Handling  Dublicate 
                if (value === current.value) return undefined;
                // adding node 
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false
        let current = this.root, found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }

        //return current ? current.value : undefined; // if you want value 
        return current ? current : undefined;
    }
    contain(value) {
        if (this.root === null) return false
        let current = this.root, found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }

        //return current ? current.value : undefined; // if you want value 
        return false
    }
}

// Now creating Binary Search Tree
//export let tree = new BinarySearchTee();
// tree.root = new Node(10);
// tree.root.right = new Node(15)
// tree.root.left = new Node(8)
// tree.root.left.right = new Node(9)

// Inserting a Node in BST in PseudoCode 
/*
- create a new node 
- strarting at the root 
   - check if there is a root ,if not - the root now becomes that new nodel 
   - if there is a root , check if the value of the new ndoe is grater than or less than the value of the root 
   -if it is grater 
       - check to see if there is a node to the right 
         - if there is , move to that node and reapate these steps 
         - if there is not , add that node as the right property
    if it is less
         - Check to see if there is a node to the left 
          - if there is , move to that node and repeat these steps 
          - if there is not , add that node as the left property
*/
//           10
//       5       13
//     2    7   11    16
//           
//   This is perfect Binary Tree



tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

// Finding a Node in a BST PseudoCode 
/*
 - Starting at the root 
   - Check if there a root , if not - whe're done searching !
   - if there is a root , check if the value of the new node is the value we are looking for
      if we found it , we're done
   - if not , check to see if the value is greater than or less than the value of the root
   - if it is grater 
       - Check to see if there is a node to the right 
       - if there is not , we're done searching 
    - if it is less
        -Check to see if there is a node to left 
          - if there is , move to that node and repeat the steps 
          - if there is not  , we're done searching 
*/

//console.log(tree.find(10))
console.log(tree.contain(7))

// Big O of BST 
 /* 
 - Insert - O(log n)
 - Searching - O(log n) 
 -  if you have one sided binary tree -> then O(n) //exeption
 */


