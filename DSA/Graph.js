

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(vertex1,vertex2, isUndirected = false){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        
        this.adjacencyList[vertex1].push(vertex2);
        
        if(isUndirected){
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return;
        
        for(let adjVertex of this.adjacencyList[vertex]){
            this.adjacencyList[adjVertex] = this.adjacencyList[adjVertex].filter(v=>v!==vertex);
        }
        delete(this.adjacencyList[vertex])
    }
    
    
    removeEdge(vertex1,vertex2,isUndirected = false){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return ;
        }
        
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        
        if(isUndirected){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1);
        }
    }
    
    bfs(start){
        let queue = [start];
        let visited = new Set();
        let result = [];
        
        visited.add(start);
        
        while(queue.length > 0){
            let current = queue.shift();
            result.push(current);
            
            for(let neighbor of this.adjacencyList[current]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
    
    dfs(start){
        let stack = [start];
        let visited = new Set();
        let result = [];
        
        while(stack.length > 0){
            let current = stack.pop();
            
            if(!visited.has(current)){
                visited.add(current);
                result.push(current);
                
                let neighbor = this.adjacencyList[current];
                for(let i = neighbor.length-1;i>=0;i--){
                    if(!visited.has(neighbor[i])){
                        stack.push(neighbor[i]);
                    }
                }
            }
        }
        return result;
    }
    
    
    isCyclic(){
        let visited = new Set();
        let pathVisited = new Set();
        
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(this.dfsCheck(vertex,visited,pathVisited)){
                    return true;
                }
            }
        }
        return false;
    }
    
    dfsCheck(vertex,visited,pathVisited){
        visited.add(vertex);
        pathVisited.add(vertex)
        
        for(let neighbor of this.adjacencyList[vertex]){
            if(!visited.has(neighbor)){
                if(this.dfsCheck(neighbor,visited,pathVisited)){
                    return true;
                }
            }else if(pathVisited.has(neighbor)){
                return true;
            }
        }
        pathVisited.delete(vertex);
        return false;
    }
    
    
    
    
    // displayGraph(){
    //     for(let vertex in this.adjacencyList){
    //         console.log(`${vertex} -> ${this.adjacencyList[vertex].join('')}`)
    //     }
    // }
    
}


// const graph = new Graph();
// graph.addEdge("A", "B",true);
// graph.addEdge("A", "C",true);
// graph.addEdge("B","C",true);
// // graph.addEdge("C","A",true);
// console.log(graph.adjacencyList)
// // graph.displayGraph();
// // graph.removeVertex("A");
// graph.removeEdge("A","B",true)
// console.log(graph.adjacencyList);
// console.log(graph.bfs("A"))
// console.log(graph.dfs("A"))




const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "A"); // Cycle: A → C → A
graph.addEdge("C", "E");
graph.addEdge("E", "B");
graph.addEdge("B", "D");
graph.addEdge("B", "A"); // Cycle: B → A → B

console.log(graph.isCyclic()); 



