class Graph {
  constructor() {
    this.edges = {};
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addDirectedEdge(node1, node2, weight = 1) {
    this.edges[node1].push({ node: node2, weight });
  }

  display() {
    let graph = '';
    this.nodes.forEach((node) => {
      graph += `${node}->${this.edges[node].map(n => `${n.node}(${n.weight})`).join(',')}\n`;
    });
    console.log(graph);
  }
}
module.exports = Graph;
