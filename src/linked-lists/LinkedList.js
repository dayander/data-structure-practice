class Node {
    constructor(props) {

        this.value = props.value;
        this.next = props.next;

    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`
    }


}



export default class LinkedList {

    constructor(props){
        this.head = null;
        this.tail = props.tail;
        this.node = {
            value: props.value,
            next: props.next
        }


    }


     append(data){
        var current = this.node

         while(current.value != null){
            current = current.next
         }

         current.next = this.node = {...data}


    }

}