class GraphNode {
  constructor(val) {
    this.val = val;
    this.edges = {};
  }
}

class Graph {
  constructor(totalVertices) {
    this.totalVertices = totalVertices;
    this.verticesAdjList = {};
  }

  addVertex(val) {
    if (!this.verticesAdjList[val]) {
      this.verticesAdjList[val] = new GraphNode(val);
    }
  }

  addEdge(start, end) {
    if (this.verticesAdjList[start] && this.verticesAdjList[end]) {
      this.vertices[start].edges[end] = 1;
    }
  }
}

module.exports = Graph;
