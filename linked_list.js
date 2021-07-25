function createNode(value) {
    return {
        value,
        next: null
    }
}

function createLinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        push: function(value) {
            const node = createNode(value)

            // jika linkedlist kosong
            if (this.isEmpty()) {
                this.head = node
                this.tail = node
                this.length += 1
                return node
            } else {
                this.tail.next = node
                this.tail = node
                this.length += 1
                return node
            }
        },
        pop: function() {
            // jika kosong
            if (this.isEmpty()) {
                return null
            }
            
            const node = this.tail
            
            // jika memiliki 1 node
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
                this.length = 0
                return node
            }

            // jika memiliki lebih dr 1 node
            let current = this.head
            let penult
            while (current) {
                if (current.next === this.tail) {
                    penult = current
                    break
                }
                current = current.next
            }
            penult.next = null
            this.tail = penult
            this.length -= 1
            return node
        },
        get: function(index) {
            // jika list kosong
            if (index < 0 || index > this.length) {
                return null
            }
            // list 1 item
            if (index === 0) {
                return this.head
            }
            // list > 1 item
            let current = this.head
            let i = 0
            while (i < index) {
                current = current.next
                i += 1
            }
            return current
        },
        delete: function(index) {
            // list kosong
            if (index < 0 || index > this.length) {
                return null
            }
            // list 1 item
            if (index === 0) {
                let deleted = this.head
                this.head = this.head.next
                this.length -= 1
                return deleted
            }
            // list > 1 item
            let current = this.head
            let prev
            let i = 0
            while (i < index) {
                prev = current
                current = current.next
                i += 1
            }
            let deleted = current
            prev.next = current.next
            this.length -= 1
            return deleted
        },
        isEmpty: function() {
            return this.length === 0
        },
        print: function() {
            const values = []
            let current = this.head

            while (current) {
                values.push(current.value)
                current = current.next
            }

            return values
        }
    }
}

const list = createLinkedList()
const values = ['a', 'b', 'c', 'd']
const nodes = values.map(value => {
    list.push(value)
})

console.log(list.print())
console.log(list.pop().value)
console.log(list.print())
console.log(list.get(1).value)
console.log(list.delete(1))
console.log(list.print())