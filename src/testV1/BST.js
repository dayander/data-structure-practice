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

    }
}