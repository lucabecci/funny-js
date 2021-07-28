

class Node {
    constructor(value, node = null){
        this.value = value
        this.node = node
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`
    }
}

export default Node