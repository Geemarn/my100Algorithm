const data = require('./sampleInputBig2.json')

const sampleInput = [
    {
        key: [1, 4],
        val: 'red'
    },
    {
        key: [-2, -1],
        val: 'green'
    },
    {
        key: [2, 40],
        val: 'blue'
    }
];


class TreeNode {
    constructor(key, val) {
        this.keyRange = key; // key is an array of two values (a range)
        this.value = val;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getNodeHeight(node) {
        return node ? node.height : 0;
    }

    updateNodeHeight(node) {
        node.height = 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
    }

    getBalanceFactor(node) {
        return this.getNodeHeight(node.left) - this.getNodeHeight(node.right) ?? 0;
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        //rotate
        y.left = x;
        x.right = T2;

        this.updateNodeHeight(x);
        this.updateNodeHeight(y);

        return y;
    }

    rotateRight(y) {
        const x = y.left;
        const T3 = x.right;

        //rotate
        x.right = y;
        y.left = T3;

        this.updateNodeHeight(y);
        this.updateNodeHeight(x);

        return x;
    }

    insert(root, keyRange, value) {
        if (!root) return new TreeNode(keyRange, value);

        if (keyRange[0] < root.keyRange[0]) {
            root.left = this.insert(root.left, keyRange, value);
        } else {
            root.right = this.insert(root.right, keyRange, value);
        }

        this.updateNodeHeight(root);

        const balanceFactor = this.getBalanceFactor(root);

        // Performing rotations to maintain AVL balance if need be
        // Left scenario
        if (balanceFactor > 1) {
            if (keyRange[0] < root.left.keyRange[0]) {
                return this.rotateRight(root);
            } else {
                root.left = this.rotateLeft(root.left);
                return this.rotateRight(root);
            }
        }
        //right scenario
        if (balanceFactor < -1) {
            if (keyRange[0] >= root.right.keyRange[0]) {
                return this.rotateLeft(root);
            } else {
                root.right = this.rotateRight(root.right);
                return this.rotateLeft(root);
            }
        }
        return root;
    }

    search(root, key) {
        if (!root) return undefined;

        //condition is true
        if (key >= root.keyRange[0] && key < root.keyRange[1]) {
            return root.value;
        }

        //condition is not true
        if (key < root.keyRange[0]) {
            return this.search(root.left, key);
        } else {
            return this.search(root.right, key);
        }
    }
}

function makeQuery(input) {
    const tree = new AVLTree();

    for (const obj of input) {
        tree.root = tree.insert(tree.root, obj.key, obj.val);
    }

    return (key) => tree.search(tree.root, key);
}

const query= makeQuery(data);
console.log(query(1112223));
console.log(query(0));
console.log(query(-12));
