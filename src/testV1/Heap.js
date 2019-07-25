export default class Heap {
    constructor(scoreFunction){
        this.content = []
        this.scoreFunction = scoreFunction
    }

    push = (data) => {
        this.content.push(data)
        this.bubbleUp(this.content.length - 1)
    }

    pop = () => {
        let result = this.content[0]
        let end = this.content.pop()

        if(this.content.length > 0){
            this.content[0] = end
            this.sinkDown(0)
        }
        return result
    }

    remove = (node) => {
        const length = this.content.length
        // To remove a value, we must search through the array to find
        // it.
        for (let i = 0; i < length; i++) {
            if (this.content[i] != node) continue;
            // When it is found, the process seen in 'pop' is repeated
            // to fill up the hole.
            let end = this.content.pop();
            // If the element we popped was the one we needed to remove,
            // we're done.
            if (i == length - 1) break;
            // Otherwise, we replace the removed element with the popped
            // one, and allow it to float up or sink down as appropriate.
            this.content[i] = end;
            this.bubbleUp(i);
            this.sinkDown(i);
        }
    }

    size = _ => {
        return this.content.length
    }

    bubbleUp = n => {
        let element = this.content[n]
        let score = this.scoreFunction(element)

        while (n> 0){
            let parentN = Math.floor((n + 1) /2) -1
            let parent = this.content[parentN]

            if (score >= this.scoreFunction(parent)) break

            this.content[parentN] = element
            this.content[n] = parent
            n = parentN
        }
    }

    sinkDown = n => {
        const length = this.content.length
        let element = this.content[n]
        const elemScore = this.scoreFunction(element)

        while(true) {

            let child2N = (n + 1) * 2, child1N = child2N - 1;
            let child1 = this.content[child1N]
            let child1Score = this.scoreFunction(child1);


            let swap = null;

            if (child1N < length) {



                if (child1Score < elemScore)
                    swap = child1N;
            }

            if (child2N < length) {
                let child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score))
                    swap = child2N;
            }


            if (swap == null) break;
            
            this.content[n] = this.content[swap];
            this.content[swap] = element;
            n = swap;
        }
    }

}