import Node from './Node'

//https://github.com/benoitvallon/computer-science-in-javascript/blob/master/data-structures-in-javascript/doubly-linked-list.es6.js

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add = (data) => {
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.previous = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    remove = data => {
        let current = this.head
        while (current){
            if (current.data === data){
                if( current === this.head && current === this.tail){
                    this.head = null
                    this.tail = null

                } else if(current === this.head) {
                    this.head = this.head.next
                    this.head.previous = null
                } else if(current === this.tail) {
                    this.tail = this.tail.previous
                    this.tail.next = null
                } else {
                    current.previous.next = current.next
                    current.next.previous = current.previous
                }
                this.size --
            }

        }
    }

    insertAfter(data, toNodeData) {
        let current = this.head;
        while(current) {
            if(current.data === toNodeData) {
                const node = new Node(data);
                if(current === this.tail) {
                    this.add(data);
                } else {
                    current.next.previous = node;
                    node.previous = current;
                    node.next = current.next;
                    current.next = node;
                    this.size++;
                }
            }
            current = current.next;
        }
    }

    traverse(fn) {
        let current = this.head;
        while(current) {
            if(fn) {
                fn(current);
            }
            current = current.next;
        }
    }

    traverseReverse(fn) {
        let current = this.tail;
        while(current) {
            if(fn) {
                fn(current);
            }
            current = current.previous;
        }
    }

    length() {
        return this.size;
    }

    print() {
        let string = '';
        let current = this.head;
        while(current) {
            string += `${current.data} `;
            current = current.next;
        }
        console.log(string.trim());
    }

}