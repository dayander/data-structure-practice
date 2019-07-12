import Node from './Node'
export default class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add = (data) => {
        const newNode = new Node(data);

        if(this.head === null){
            this.head = newNode
        } else{
            let current = this.head

            while(current.next){
                current = current.next;
            }

            current.next = newNode
        }
        this.size++
    }

    get = (index) => {
        if(index > -1){
            let current = this.head;
            let i = 0;

            while((current !== null) && i <index){
                current = current.next
                i++
            }

            return current !== null ? current.data : undefined;

        } else {
            return undefined;
        }
    }

    insertAt = (data, index) => {
        if(index > 0 && index > this.size){
            return false
        } else {
            let newNode = new Node(data)
            let i = 0;

            if(index === 0){
                this.head = newNode;
            } else {
                let current = this.head;
                let prev

                while(i<index){
                    i++
                    prev = current
                    current = current.next
                }
                newNode.next = current
                prev.next = newNode
            }
            this.size++
        }
    }

    removeFrom = (index) => {
        if(index > 0 && index > this.size){
            return false;
        } else {
            let i = 0;
            let current = this.head
            let previous = current

            if(index === 0){
                this.head = current.next;
            } else {
                while( i < index){
                    i++
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }
            this.size--

            return current.data
        }
    }

    removeData = (data) => {
        let current = this.head;
        let previous = null;

        while (current){
            if(current.data == data){
                if(previous === null){
                    this.head = current.next
                } else {
                    previous.next = current.next;
                }

                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        }
        return -1;


    }

    indexOf = (data) => {
        let current = this.head;
        let i = 0;
        while(current){
            if(current.data === data) return i;
            i++
            current = current.next
        }
        return false;
    }

    isEmpty = () => {
        return this.size === 0
    }

    printList = () => {
        let current = this.head
        let str = ''

        while(current){
            str += `${current.data} `
            current = current.next
        }
        return str
    }
}