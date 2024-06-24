const rules = [
    { pattern: /\.e\b/g, replacement: '' },
    { pattern: /\.e\.s\b/g, replacement: 's' },

    { pattern: /·e\b/g, replacement: '' },
    { pattern: /·e·s\b/g, replacement: 's' },

    { pattern: /-e\b/g, replacement: '' },
    { pattern: /-e-s\b/g, replacement: 's' },
]

function replaceText(node) {
    let text = node.nodeValue

    rules.forEach(
        (rule) => text = text.replace(rule.pattern, rule.replacement)
    )

    node.nodeValue = text
}

function walkDOM(element) {
    if(element === null) {
        return
    }

    let child, next

    switch (element.nodeType) {
        case 1: case 9: case 11:
            child = element.firstChild

            while (child) {
                next = child.nextSibling

                walkDOM(child)

                child = next
            }

            break
        case 3:
            replaceText(element)
            break
    }
}

walkDOM(document.body)
