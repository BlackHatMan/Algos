import { BinaryTree } from './binaryTree/recursive';

const tree = new BinaryTree();
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(99);
tree.insert(55);
tree.insert(77);
tree.insert(56);

tree.remove(77);

console.log(tree.root);
