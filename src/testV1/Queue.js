class Queue {
    constructor(){
        this.queue = []
    }

    enqueue = data => {
        this.queue.push(data)
    }

    dequeue = data => {
        return this.queue.shift()
    }

    peek = () => {
        return this.queue[0]
    }

    length = () => {
        return this.queue.length
    }

    print = () => {
        console.log(this.queue.join(' '))
    }

}