export default class Queue {
    constructor(){
        this.elements = []
    }

    isEmpty(){
        return this.elements.length > 0 ? true : false
    }

    enqueue(item){
        this.elements.push(item)
        return
    }

    dequeue(){
        return this.isEmpty() ? this.elements.shift() : null
        
    }

    head(){
        
        return this.isEmpty() ? 
                this.elements[this.elements.length - 1]
                :
                null
    }

    tail(){
        return this.isEmpty() ? 
                this.elements[0]
                :
                null
    }

    size(){
        return this.enqueue.length
    }

    print(){
        for (let l = 0; l < this.elements.length; l++) {
            console.log(this.elements[l])
        }
    }

    find(v){
        for (let l = 0; l < this.elements.length; l++) {
            if(this.elements[l] === v){
                return this.elements[l]
            }
        }
    }
}