const tree = require("./intro")
console.log(tree)
// Tree Traversal  (visiting every node in tree )

// Two Way
// Breadth-first Search
// Depth-first Search


// Breadth-first Search  Pseudocode 
/*
- Creating a queue (this can be an array ) and a variable to store the values of nodes visited 
- Place the root node in the queue
- Loop as longs as there is anything in the queue
    - Dequeue a node form the queue and push the value of the node into the variable that store the nodes 
    - if there is a left property on the node dequeued - add it to the queue
    - if there is a rigth property on the node dequeued- add it to the queue
- Return the variable that stores the values
*/
