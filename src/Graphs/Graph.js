export default class Graph {
    constructor(v){
        this.verticies = v;
        this.edges = 0;
        this.adj = this.addAdj()
        this.marked = this.markedInit()
        }
    markedInit = () => {
        let temp = []
        for(let i = 0; i < this.verticies; i++){
            temp[i] = false
        }
        return temp
    }

    addAdj = () =>{
        let tempArr = []
        for(let i = 0; i < this.verticies; i++){
            tempArr[i] = []
        }
        return tempArr
    }

    addEdge = (v,w) =>{
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edges++
    }

    showGraph = () => {
        for(let i =0; i < this.verticies; i++){
            for (let j = 0; j < this.verticies; j++){
                if(this.adj[i][j] !== undefined){
                    console.log( `${i}: ${this.adj[i][j]}`)
                }
            }
        }
    }

    dfs = (v) => {
        this.marked[v] = true
        if (this.adj[v] !== undefined) {
            console.log("Visited vertex: " + v);
        }
        this.adj[v].forEach(w =>{
            if (!this.marked[w]) {
                this.dfs(w);
            }

        })
    }

    bfs = (s) => {
        let queue = []
        this.marked[s] = true
        queue.push(s)
        while (queue.length > 0){
            let v = queue.shift(); // remove from front of queue if (v == undefined) {
            console.log("Visited vertex: " + v);
        }
        this.adj[v].forEach(w => {
            if (!this.marked[w]){
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        })

        }
        

}