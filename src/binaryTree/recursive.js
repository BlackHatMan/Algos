class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  isLeaf() {
    return this.left === null && this.right === null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  #getMinNode(node) {
    return node.left === null ? node : this.#getMinNode(node.left);
  }

  insert(value) {
    const newNode = new Node(value);
    this.root === null ? (this.root = newNode) : this.#insertNode(newNode, this.root);
  }

  #insertNode(node, root) {
    if (node.value < root.value) {
      return root.left === null ? (root.left = node) : this.#insertNode(node, root.left);
    } else {
      return root.right === null ? (root.right = node) : this.#insertNode(node, root.right);
    }
  }

  isOrderTraverse(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.isOrderTraverse(node.left, callback);
      this.isOrderTraverse(node.right, callback);
    }
  }

  search(node, value, callback) {
    if (node === null) return null;

    if (value < node.value) {
      this.search(node.left, value, callback);
    } else if (value > node.value) {
      this.search(node.right, value, callback);
    } else {
      callback(node);
      return node;
    }
  }

  remove(value) {
    this.root = this.#removeNode(this.root, value);
  }

  #removeNode(node, value) {
    if (node.value === null) return null;
    else if (value < node.value) {
      node.left = this.#removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.#removeNode(node.right, value);
      return node;
    } else {
      if (node.isLeaf()) return null;
      else if (node.left === null) return node.right;
      else if (node.right === null) return node.left;
      else {
        let newNode = this.#getMinNode(node.right);
        node.data = newNode.data;
        node.right = this.#removeNode(node.right, newNode.data);
        return node;
      }
    }
  }
}
