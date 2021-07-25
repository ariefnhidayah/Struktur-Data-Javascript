function createQueue() {
    const queue = []
    return {
        enqueue: function(value) {
            // queue.unshift(value) // 1
            // atau
            queue.push(value) // 2
        },
        dequeue: function(value) {
            // queue.pop() // 1
            // atau
            queue.shift() // 2
        },
        peek: function() {
            return queue[0]
        },
        size: function() {
            return queue.length
        }
    }
}

const queue = createQueue()
queue.enqueue("Todo 1")
queue.enqueue("Todo 2")
queue.enqueue("Todo 3")
queue.enqueue("Todo 4")

queue.dequeue()
console.log(queue.peek())