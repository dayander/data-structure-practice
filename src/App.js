import React from 'react';
import logo from './logo.svg';
import './App.css';
import BST from './BianarySearchTrees/BST'
import Node from './Node'

import LinkedList from './testV1/LinkedList'

function App() {
    // //BST
    // let n = new BST()
    //
    // n.insert(12)
    // n.insert(13)
    // n.insert(14)
    // n.insert(99)
    // n.insert(0)
    // n.insert(2)
    // n.insert(66)
    // n.insert(42)
    // n.insert(42)
    //
    // n.inOrder(n.root)
    // console.log('min',n.getMin())
    // console.log('max',n.getMax())
    // console.log(n.find(14))
    //
    // console.log('remove', n.remove(0))
    // console.log('min after', n.getMin())
    //
    //
    //
    // //Graph
    // console.log("Graph")
    //
    // let g = new Graph(10)
    //
    // g.addEdge(0,1); g.addEdge(0,2); g.addEdge(1,3); g.addEdge(2,4);
    // console.log(g)
    // g.showGraph()
    // g.dfs(0)

//LINKED LISTS
    //Test v1 Implementation
    let linkedList = new LinkedList()
    console.log(linkedList.isEmpty())
    linkedList.add(12)
    linkedList.add(13)
    linkedList.add(55)
    linkedList.add(42)
    console.log(linkedList)
    console.log(linkedList.isEmpty())
    console.log(linkedList.removeFrom(3))
    linkedList.add(42)
    console.log(linkedList.indexOf(42))
    console.log(linkedList.removeData(42))
    console.log(linkedList.get(3))
    linkedList.insertAt(16, 3)
    console.log(linkedList)
    console.log(linkedList.removeFrom(3))
    console.log(linkedList.printList())

    //Test v2 implementations




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
