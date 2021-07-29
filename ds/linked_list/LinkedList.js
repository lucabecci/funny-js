import Node from './Node'
import Comparator from '../../utils/Comparator'
export default class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;

        this.compare = new Comparator()
    }
    //prepare linked list
    prepend(value){
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if(!this.tail) this.tail = newNode;

        return this;
    }
    //add node in the top
    append(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }
    //delte specific node
    delete(value){ //i dont understand this resolveppp
        if(!this.head) return null

        let deletedNode = null;

        while(this.head && this.compare.equal(this.head.value, value)){
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode){
            while(currentNode.next){
                if(this.compare.equal(currentNode.next.value, value)){
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }else {
                    currentNode = currentNode.next;
                }
            }
        }

        if(this.compare.equal(this.tail.value, value)){
            this.tail = currentNode;
        }

        return deletedNode
    }
    //find one node
    find({value = undefined, callback = undefined}){
        if(!this.head){
            return null;
        }

        let currentNode = this.head;

        while(currentNode){
            if(callback && callback(currentNode.value)){
                return currentNode;
            }

            if(value != undefined && this.compare.equal(currentNode.value, value)){
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }
    //delete the last node
    deleteTail(){
        const deletedTail = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;

            return deletedTail
        }

        //if there have many of nodes
        let currentNode = this.head;
        while(currentNode.next){
            if(!currentNode.next.next){
                currentNode.next = null;
            }else{
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail
    }
    //delete the first node
    deleteHead(){
        if(!this.head){
            return null;
        }

        const deletedHead = this.head;

        if(this.head.next){
            this.head = this.head.next
        }else{
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }
    //get arr and create a linked list with all values of the arr
    fromArray(arr){
        arr.forEach(v => this.append(v)); 
    }
    //transform the linked list in array
    toArray(){
        const nodes = [];

        let currentNode = this.head;
        while(currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    //print all values of the list
    printValues(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    //reverse the linked list
    reverse(){
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while(currNode){
            nextNode = currNode.next;

            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}