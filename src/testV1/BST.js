class Node {
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }

}

//https://github.com/benoitvallon/computer-science-in-javascript/blob/master/data-structures-in-javascript/binary-search-tree.es6.js

export default class BST {
    constructor(){
        this.root = null
    }


    add = data => {
        const newNode = new Node(data)
        let current = this.root

        if(!current){
            this.root = newNode
        } else{
            while(current){
                if(newNode.data < current.data){
                    if(!current.left){
                        current.left = newNode
                    } else {
                        current = current.left
                    }

                } else if (newNode.data > current.data){
                    if(!current.right){
                        current.right = newNode
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    remove = data => {
        const removeNode = (node, data) => {
            if(!node){
                return null
            }
            if(data === node.data){
                if(!node.left && !node.right){
                    return null
                }
                if(!node.left){
                    return node.right
                }
                if(!node.right){
                    return node.left
                }

                const temp = this.getMin(node.right)
                node.right = temp
                node.right =  removeNode(node.right, temp)
                return node
            } else if(data < node.data){
                node.left = removeNode(node.left, data)
                return node
            } else {
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }

    contains = data => {
        let current = this.root
        while(current){
            if(data === current.data){
                return true
            }
            if(data < current.data){
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }

    _preOrder = (node, fn) => {
        if(node){
            if(fn){
                fn(node)
            }
        }
        this._preOrder(node.left, fn)
        this._preOrder(node.right, fn)
    }
    _inOrder = (node, fn) => {
        if(node){
            this._inOrder(node.left, fn)
            if(fn){
                fn(node)
            }
        this._inOrder(node.right, fn)
        }
    }
    _postOrder = (node, fn) => {
        if(node){
            this._postOrder(node.left, fn)
            this._postOrder(node.right, fn)
            if(fn){
                fn(node)
            }
        }
}

    traverseDFS = (fn, method) => {
        const current = this.root
        if(method){
            this[`_${method}`](current, fn)
        } else {
            this._preOrder(current, fn)
        }
    }

    traverseBFS = (fn) => {
        this.queue = []
        this.queue.push(this.root)
        while(this.queue.length){
            const node = this.queue.shift()
            if(fn){
                fn(node)
            }
            if(node.left){
                this.queue.push(node.left)
            }
            if(node.right){
                this.queue.push(node.right)
            }
        }

    }

    print = () => {
        if(!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('|');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
            const node = queue.shift();
            string += `${node.data.toString()} `;
            if(node === newline && queue.length) {
                queue.push(newline);
            }
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        console.log(string.slice(0, -2).trim());
    }

    printByLevel = () => {
        if(!this.root) {
            return console.log('No root node found');
        }
        const newline = new Node('\n');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
            const node = queue.shift();
            string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
            if(node === newline && queue.length) {
                queue.push(newline);
            }
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        console.log(string.trim());
    }

    getMin = node => {
        if(!node){
            node = this.root
        }
        while(node.left){
            node = node.left
        }
        return node.data
    }

    getMax = node => {
        if(!node){
            node = this.root
        }
        while(node.right){
            node = node.right
        }
        return node.data
    }

    _getHeight = node => {
        if(!node){
            return -1
        }
        const left = this._getHeight(node.left)
        const right = this._getHeight(node.right)
        return Math.max(left, right) + 1
    }

    getHeight = node => {
        if(!node){
            node = this.root
        }
        return this._getHeight(node)
    }

    _isBalanced = node => {
        if(!node){
            return true
        }
        const heightLeft = this._getHeight(node.left)
        const heightRight = this._getHeight(node.right)
        const diff = Math.abs(heightLeft - heightRight)
        if(diff > 1) {
            return false;
        } else {
            return this._isBalanced(node.left) && this._isBalanced(node.right);
        }

    }

    isBalanced = node => {
        if(!node){
            node = this.root
        }

        return this._isBalanced(node)
    }

    _checkHeight = node => {
        if(!node){
            return 0
        }

        const left = this._checkHeight(node.left)
        if(left == -1){
            return -1
        }

        const right = this._checkHeight(node.right)
        if(right == -1){
            return -1
        }

        const diff = Math.abs(left - right)
        if(diff > 1){
            return -1
        } else {
            return Math.max(left, right ) + 1
        }
    }

    isBalancedOptimized = node => {
        if(!node){
            node = this.root
        }
        if(!node){
            return true
        }
        if(this._checkHeight(node)=== -1){
            return false
        } else {
            return true
        }

    }
}