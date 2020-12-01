class Vertice {
    data;
    constructor(data){
        this.data = data;
    }
}

class Edge {
    a;
    b;

    constructor(a,b){
        if(a instanceof Vertice && b instanceof Vertice) {
            this.a = a;
            this.b = b;
        }
    }
}

class Graph {
    name;
    vertice;
    edges;

    constructor(name){
        this.name = name;
        this.vertice = [];
        this.edges = [];
    }

    addVertice(){
        if(v instanceof Vertice){
            this.vertice.push(v);
        }
    }
    
    addEdge(a,b){
        if(a instanceof Vertice && b instanceof Vertice && a != b){
            let foundEdge = this.edges.find((edge) => {
                return (edge.a == a && edge.b == b) || (edge.a == b && edge.b == a);
            });
            
            if(!foundEdge){
                let newEdge = new Edge(a,b);        
                this.edges.push(newEdge);
            }
        }
    }

}

let A = new Vertice("A");
let B = new Vertice("B");
let C = new Vertice("C");
let D = new Vertice("D");
let E = new Vertice("E");


let myGrapg = new Graph("my graph");
myGrapg.addVertice(A);
myGrapg.addVertice(B);
myGrapg.addVertice(C);
myGrapg.addVertice(D);
myGrapg.addVertice(E);

myGrapg.addEdge(A,B);
myGrapg.addEdge(B,A);
myGrapg.addEdge(A,C);
myGrapg.addEdge(C,A);








