import Node from '../Node';

export default class BST {
    constructor(){
        this.root = null
    }

    insert = (data) =>{
        let n = new Node(data, null, null);
        if(this.root === null){
            this.root = n
        } else {
            let current = this.root
            let parent
            while(true){
                parent = current
                if(data < current.data){
                    current = current.left
                    if(current === null){
                        parent.left = n;
                        break
                    }
                } else{
                    current = current.right
                    if(current === null){
                        parent.right = n
                        break
                    }
                }
            }
        }
    }

    inOrder = (node) => {
        if(!(node === null)){
            this.inOrder(node.left)
            console.log(node.show())
            this.inOrder(node.right)

        }

    }

    preOrder = (node) => {
        if(!(node===null)){
            console.log(node.show())
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder = (node) => {
        if(!(node ===null)){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.show())
        }
    }

    getMin = () => {
        let current = this.root
        while(!(current.left === null)){
            current = current.left
        }
        return current.data
    }

    getMax = () => {
        let current = this.root
        while(!(current.right === null)){
            current = current.right
        }
        return current.data
    }

    getSmallest = (node) => {
        while (!(node.left===null)){
            node = node.left
        }
        return node
    }

    find = (data) =>{
        let current = this.root
        while (current.data != data){
            if(data < current.data){
                current = current.left
            }else{
                current = current.right
            }
            if(current=== null){
                return null
            }
        }

        return current
    }

    remove = (data) => {
        return this.removeNode(this.root, data)
    }

    removeNode = (node, data) => {
        if(node === null){
            return null
        }
        if(data === node.data){
            if(node.left === null && node.right === null){
                return null
            }
            if(node.left === null){
                return node.right
            }
            if(node.right === null){
                return node.left
            }

            let tempNode = this.getSmallest(node.right)
            node. data = tempNode.data
            node.right = this.removeNode(node.right, tempNode.data)
            return node
        }else if (data < node.data){
            node.left = this.removeNode(node.left, data)
            return  node
        } else{
            node.right = this.removeNode(node.right, data)
            return node
        }

    }

}