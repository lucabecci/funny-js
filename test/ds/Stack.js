import { assert } from 'chai';
import Stack from '../../ds/stack/Stack'
describe('Stack', function () {
    it("Create a Stack", function(done){
        const stack = new Stack();
        stack.push(22)
        assert.deepEqual(stack.size(), 1)
        done()
    })

    it("Push value in the Stack", function(done){
        const stack = new Stack();
        stack.push(33)
        assert.deepEqual(stack.size(), 1)
        done()
    })

    it("Pop value in the Stack", function(done){
        const stack = new Stack();
        stack.push(1422)
        stack.pop()
        assert.deepEqual(stack.size(), 0)
        done()
    })

    it("Size in the Stack", function(done){
        const stack = new Stack();
        stack.push(1422)
        stack.push(231)
        stack.push(12)
        stack.push(93.2)
        stack.push(0.23)
        assert.deepEqual(stack.size(), 5)
        done()
    })
});
