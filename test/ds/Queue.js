import { assert } from 'chai';
import Queue from '../../ds/queue/Queue'
describe('Queue', function () {
    it('create queue - Queue', function (done) {
        const queue = new Queue();
        assert.deepEqual(queue.elements.length, 0, 'Error in queue instance');
        done();
    });

    it("insert value in queue", function(done){
        const queue = new Queue()
        queue.enqueue(234.101)
        assert.deepEqual(queue.size(), 1)
        done()
    })

    it("delete value in queue", function(done){
        const queue = new Queue()
        queue.enqueue(234.101)
        queue.dequeue()
        assert.deepEqual(queue.elements.length, 0)
        done()
    })

    it("print queue", function(done){
        const queue = new Queue()
        queue.enqueue(23)
        queue.enqueue(158)
        queue.enqueue(0.21)
        queue.enqueue(4)
        // queue.print()
        done()
    })

    it("find value in queue", function(done){
        const queue = new Queue()
        queue.enqueue(23)
        queue.enqueue(158)
        queue.enqueue(0.21)
        queue.enqueue(4)
        const finded = queue.find(0.21)
        assert.deepEqual(finded, queue.elements[2])
        done()
    })
});
