

class Node {
    constructor(value, node = null){
        this.value = value
        this.node = node
    }
}

const node1 = new Node(22)
const node2 = new Node(33, node1)

export default Node