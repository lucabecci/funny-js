import { assert } from 'chai';
import Node from '../../ds/linked_list/Node';
import LinkedList from '../../ds/linked_list/LinkedList';
describe('LinkedList', function () {
    it('create node - LinkedList', function (done) {
        const node = new Node(22);
        assert.deepEqual(node.value, 22, 'Error in node instance');
        done();
    });

    it('liking nodes - LinkedList', function (done) {
        this.timeout(9999);
        const node2 = new Node(33, null);
        const node1 = new Node(12, node2);
        assert.deepEqual(node2.value, 33, 'Error to linking node');
        assert.deepEqual(node1.value, 12, 'Error to linking node');
        assert.deepEqual(node1.next.value, 33, 'Error to linking node');
        done();
    });

    it('linking three nodes - LinkedList', function (done) {
        this.timeout(9999);
        const node6 = new Node(609);
        const node5 = new Node(12, node6);
        const node4 = new Node(321, node5);
        const node3 = new Node(1, node4);
        const node2 = new Node(9789, node3);
        const node1 = new Node(13, node2);
        assert.deepEqual(node1.next.value, node2.value);
        assert.deepEqual(node2.next.value, node3.value);
        assert.deepEqual(node3.next.value, node4.value);
        assert.deepEqual(node4.next.value, node5.value);
        assert.deepEqual(node5.next.value, node6.value);
        assert.deepEqual(node6.next, null);
        done();
    });

    it('create a linked list - LinkedList', function (done) {
        this.timeout(9999);
        const linkedList = new LinkedList();

        assert.deepEqual(linkedList.head, null);
        assert.deepEqual(linkedList.tail, null);
        done();
    });

    it('append three nodes - LinkedList', function (done) {
        this.timeout(9999);
        const linkedList = new LinkedList();
        linkedList.append(32);
        linkedList.append(788);
        linkedList.append(3);
        assert.deepEqual(linkedList.head.value, 32);
        assert.deepEqual(linkedList.tail.value, 3);
        done();
    });

    it('prepend five nodes - LinkedList', function (done) {
        this.timeout(9999);
        const linkedList = new LinkedList();
        linkedList.prepend(23);
        linkedList.prepend(876);
        linkedList.prepend(4);
        linkedList.prepend(432);
        linkedList.prepend(91);
        assert.deepEqual(linkedList.head.value, 91);
        assert.deepEqual(linkedList.tail.value, 23);
        done()
    });

    it("delete nodes - LinkedList", function(done){
        this.timeout(9999);
        const linkedList = new LinkedList();
        linkedList.append(32);
        linkedList.append(788);
        linkedList.append(3);
        assert.deepEqual(linkedList.head.value, 32);
        assert.deepEqual(linkedList.tail.value, 3);

        linkedList.delete(3);
        linkedList.delete(32);
        assert.deepEqual(linkedList.head.value, 788);
        assert.deepEqual(linkedList.head.next, null);
        
        done()
    })
});

/*
const node6 = new Node(609);
const node5 = new Node(12, node6);
const node4 = new Node(321, node5);
const node3 = new Node(1, node4);
const node2 = new Node(9789, node3);
const node1 = new Node(13, node2);
*/
