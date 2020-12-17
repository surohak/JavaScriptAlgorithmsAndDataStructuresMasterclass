// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// const traverse = (data, node, type) => {
//     type === 'pre' && data.push(node.value);
//     node.left && traverse(data, node.left, type);
//     type === 'in' && data.push(node.value);
//     node.right && traverse(data, node.right, type);
//     type === 'post' && data.push(node.value);
// }

// class BinarySearchTree {
// 	constructor() {
// 		this.root = null;
// 	}

//     insert(value){
//         let newNode = new Node(value);

//         if(!this.root){
//             this.root = newNode;
//             return this;
//         }

//         let current = this.root;

//         while(true){
//             if(value === current.value) {
//             	return undefined
//             };

//             if(value < current.value){
//                 if(!current.left){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(!current.right){
//                     current.right = newNode;
//                     return this;
//                 } 
//                 current = current.right;
//             }
//         }
//     }

//     find(value) {
//         if (!this.root) {
//             return false;
//         }

//         let current = this.root;
//         let found = false;

//         while (current && !found) {
//             if (value < current.value) {
//                 current = current.left;
//             } else if (value > current.value) {
//                 current = current.right;
//             } else {
//                 found = true;
//             }
//         }

//         if (!found) {
//             return undefined;
//         }

//         return current;
//     }

//     breadthFirstSearch() {
//         let node = this.root;
//         const data = [];
//         const queue = [];

//         queue.push(node);

//         while (queue.length) {
//             node = queue.shift();
//             data.push(node.value);

//             if (node.left) {
//                 queue.push(node.left);
//             }

//             if (node.right) {
//                 queue.push(node.right);
//             }
//         }

//         return data;
//     }

//     depthFirstPreOrder() {
//         const data = [];

//         traverse(data, this.root, 'pre');
//         return data;
//     }

//     depthFirstPostOrder() {
//         const data = [];

//         traverse(data, this.root, 'post');
//         return data;

//     }

//     depthFirstInOrder() {
//         const data = [];

//         traverse(data, this.root, 'in');
//         return data;
//     }

// }

// const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

// const dataBreadth = tree.breadthFirstSearch() 
// const dataDepthPre = tree.depthFirstPreOrder();
// const dataDepthPost = tree.depthFirstPostOrder();
// const dataDepthIn = tree.depthFirstInOrder();

// console.log(dataBreadth, dataDepthPre, 
//     dataDepthPost, dataDepthIn);


////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

class QueueNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new QueueNode(data);

    if (!this.first) this.first = newNode;
    else this.last.next = newNode;

    this.last = newNode;
    this.size++;

    return this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;

    if (!this.size) this.last = null;

    return removedNode.data;
  }
}

class StackNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(data) {
    this.first = new StackNode(data, this.first);

    if (!this.size) this.last = this.first;
    this.size++;

    return this.size;
  }

  pop() {
    if (!this.first) return null;

    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;

    if (!this.size) this.last = null;

    return removedNode.data;
  }
}

class BinarySearchTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
};

// full
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getHeight(node = this.root) {
    if (!node) return 0;

    let height = 1;
    const queue = new Queue();
    queue.enqueue(node);
    queue.enqueue('stop');

    while (queue.size > 1) {
      const currentNode = queue.dequeue();

      if (currentNode === 'stop') {
        height++;
        queue.enqueue('stop');
      } else {
        if (currentNode.left) queue.enqueue(currentNode.left);
        if (currentNode.right) queue.enqueue(currentNode.right);
      }
    }

    return height;
  }

  isBalanced(node = this.root) {
    if (!node) return true;

    const stack = new Stack();
    const depths = new Map();
    stack.push([node, false]);

    while (stack.size) {
      const [currentNode, seen] = stack.pop();

      if (!seen) {
        stack.push([currentNode, true]);
        if (currentNode.right) stack.push([currentNode.right, 0]);
        if (currentNode.left) stack.push([currentNode.left, 0]);
      } else {
        const left = depths.get(currentNode.left) || 0;
        const right = depths.get(currentNode.right) || 0;

        if (Math.abs(left - right) > 1) return false;

        depths.set(currentNode, Math.max(left, right) + 1);
      }
    }

    return true;
  }

  insert(data, node = this.root) {
    const newNode = new BinarySearchTreeNode(data);

    if (!node) {
      this.root = newNode;
      return this;
    }

    let currentNode = node;

    while (true) {
      if (newNode.data === currentNode.data) return this;

      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(data, node = this.root) {
    let currentNode = node;

    while (currentNode) {
      if (data === currentNode.data) return currentNode;

      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return null;
  }

  contains(data, node = this.root) {
    return !!this.find(data, node);
  }

  findMin(node = this.root) {
    if (!node) return null;

    let currentNode = node;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  findMax(node = this.root) {
    if (!node) return null;

    let currentNode = node;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }

  findSecondLargest(node = this.root) {
    if (!node) return null;

    let parent = null;
    let currentNode = node;

    while (currentNode.right) {
      parent = currentNode;
      currentNode = currentNode.right;
    }

    return currentNode.left ? this.findMax(currentNode.left) : parent;
  }

  invert(node = this.root) {
    if (!node) return null;
    const queue = new Queue();
    queue.enqueue(node);

    while (queue.size) {
      const currentNode = queue.dequeue();

      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);

      [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left];
    }

    return node;
  }

  findNodeWithParent(data) {
    let parentNode = null;
    let currentNode = this.root;

    while (currentNode) {
      if (data === currentNode.data) break;

      parentNode = currentNode;

      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return { parentNode, currentNode };
  }

  findNextBigNodeWithParent(node = this.root) {
    let nextBigNodeParent = node;

    if (!nextBigNodeParent || !nextBigNodeParent.right) {
      return { nextBigNodeParent, nextBigNode: null };
    }

    let nextBigNode = node.right;

    while (nextBigNode.left) {
      nextBigNodeParent = nextBigNode;
      nextBigNode = nextBigNode.left;
    }

    return { nextBigNodeParent, nextBigNode };
  }

  remove(data) {
    const { parentNode, currentNode } = this.findNodeWithParent(data);

    if (!currentNode) return null;

    const removedNode = Object.assign({}, currentNode,
      { left: null, right: null });

    // Node has no children.
    if (!currentNode.left && !currentNode.right) {
      // Node is the root and has no parent
      if (!parentNode) {
        this.root = null;
        // Node is the left child
      } else if (parentNode.left && parentNode.left.data === data) {
        parentNode.left = null;
        // Node is the right child
      } else if (parentNode.right && parentNode.right.data === data) {
        parentNode.right = null;
      }
      // Node has two children.
    } else if (currentNode.left && currentNode.right) {
      // Find the next biggest node (minimum node in the right branch)
      // to replace current node with.
      const { nextBigNode, nextBigNodeParent } = this.findNextBigNodeWithParent(currentNode);
      currentNode.data = nextBigNode.data;

      // Node is direct parent of the next biggest node
      if (nextBigNodeParent === currentNode) nextBigNodeParent.right = nextBigNode.right;
      // Node is not direct parent of the next biggest node
      else nextBigNodeParent.left = nextBigNode.right;
      // Node has only one child.
    } else {
      const nextNode = currentNode.left || currentNode.right;
      currentNode.data = nextNode.data;
      currentNode.left = nextNode.left;
      currentNode.right = nextNode.right;
    }

    return removedNode;
  }

  breadthFirstSearch(node = this.root) {
    const data = [];

    if (!node) return data;

    const queue = new Queue();
    queue.enqueue(node);

    while (queue.size) {
      const currentNode = queue.dequeue();

      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);

      data.push(currentNode.data);
    }

    return data;
  }

  depthFirstSearchPreOrder(node = this.root) {
    const data = [];

    if (!node) return data;

    const stack = new Stack();
    stack.push(node);

    while (stack.size) {
      const currentNode = stack.pop();

      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);

      data.push(currentNode.data);
    }

    return data;
  }

  depthFirstSearchPostOrder(node = this.root) {
    const data = [];

    if (!node) return data;

    const stack = new Stack();
    stack.push(node);

    while (stack.size) {
      const currentNode = stack.pop();

      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);

      data.push(currentNode.data);
    }

    data.reverse();

    return data;
  }

  depthFirstSearchInOrder(node = this.root) {
    const stack = new Stack();
    const data = [];
    let currentNode = node;

    while (currentNode || stack.size) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      data.push(currentNode.data);
      currentNode = currentNode.right;
    }

    return data;
  }
}
