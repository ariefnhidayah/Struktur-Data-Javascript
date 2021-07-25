function createNode(key) {
    const children = []
    return {
        key,
        children,
        addChild: function(childKey) {
            const childNode = createNode(childKey)
            children.push(childNode)
            return childNode
        }
    }
}

function createTree(rootKey) {
    const root = createNode(rootKey)
    return {
        root,
        print() {
            let result = ''
            function travers(node, visitFn, depth) {
                visitFn(node, depth)

                if (node.children.length > 0) {
                    node.children.forEach(function(child) {
                        travers(child, visitFn, depth + 1)
                    })
                }

            }

            function addKeyToResult(node, depth) {
                result += result.length === 0 ? node.key : `\n${'   '.repeat(depth * 2)}${node.key}`
            }

            travers(root, addKeyToResult, 1)
            return result
        },
    }
}

const dom = createTree('html')
const head = dom.root.addChild('head')
const title = head.addChild('title')

const body = dom.root.addChild('body')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')

const h1 = header.addChild('h1')
const p = main.addChild('p')
const copyright = footer.addChild('Copyright 2020')

console.log(dom.print())