class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    printValues(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}
const items = 3
const cases = [5, 6, 7]

const entry = (cases, items) => {
    const linkedList = new LinkedList()
    for (let k = 0; k < items; k++) {
        linkedList.append(cases[k])
    }

    linkedList.printValues()
}

entry(cases, items)

/*
1. Write a program in C to create and display Singly Linked List. 
Test Data :
Input the number of nodes : 3
Input data for node 1 : 5
Input data for node 2 : 6
Input data for node 3 : 7
Expected Output :

 Data entered in the list :                                                                                   
 Data = 5                                                                                                     
 Data = 6                                                                                                     
 Data = 7 
*/