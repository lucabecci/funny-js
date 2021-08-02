export default class Stack {
    constructor(){
        this.elements = []
    }
    isEmpty(){
        return this.elements.length > 1 ? false : true;
    }
    push(v){
        this.elements.push(v)
    }
    pop(){
        this.elements.pop()
    }
    print(){
        for (let k = 0; k < this.elements.length; k++) {
            console.log(this.elements[k])
        }
    }
    size(){
        return this.elements.length
    }

}

