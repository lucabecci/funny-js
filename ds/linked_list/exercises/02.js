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
function entry(cases, items){
    const linkedList = new LinkedList();
    for (let k = 0; k < items; k++) {
        linkedList.append(cases[k])
    }
    linkedList.reverse()
    linkedList.printValues()
}

entry(cases, items)

/*
2. Write a program in C to create a singly linked list of n nodes and display it in reverse order. Go to the editor
Test Data :
Input the number of nodes : 3
Input data for node 1 : 5
Input data for node 2 : 6
Input data for node 3 : 7
Expected Output :

 Data entered in the list are :                                                                               
 Data = 5                                                                                                     
 Data = 6                                                                                                     
 Data = 7                                                                                                     
                                                                                                              
 The list in reverse are :                                                                                    
 Data = 7                                                                                                     
 Data = 6                                                                                                     
 Data = 5 
*/